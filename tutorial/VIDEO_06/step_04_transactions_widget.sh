#!/bin/bash

echo "=== Creating TransactionsTable component ==="

# Navigate to root directory
cd ../../

echo "Creating TransactionsTable.tsx component..."
cat > src/components/TransactionsTable.tsx << 'EOF'
import { useEffect, useState } from 'react';
import { TransactionsTableController } from '@multiversx/sdk-dapp/out/controllers/TransactionsTableController';
import type { TransactionsRowType } from '@multiversx/sdk-dapp/out/controllers/TransactionsTableController/transactionsTableController.types';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import type { ServerTransactionType } from '@multiversx/sdk-dapp/out/types/serverTransactions.types';
import { MvxTransactionsTable } from '@multiversx/sdk-dapp-ui/react';

export const TransactionsTable = ({
  transactions = []
}: {
  transactions?: ServerTransactionType[];
}) => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [processedTransactions, setProcessedTransactions] = useState<
    TransactionsRowType[]
  >([]);

  const processTransactions = async () => {
    const transactionsData =
      await TransactionsTableController.processTransactions({
        address,
        egldLabel: network.egldLabel,
        explorerAddress: network.explorerAddress,
        transactions
      });

    setProcessedTransactions(transactionsData);
  };

  useEffect(() => {
    processTransactions();
  }, [transactions]);

  return <MvxTransactionsTable transactions={processedTransactions} />;
};
EOF

echo "✅ TransactionsTable component created successfully!"

echo "=== Updating components index.ts ==="

echo "Updating src/components/index.ts file..."
cat > src/components/index.ts << 'EOF'
export * from './Button';
export * from './FormatAmount';
export * from './Label';
export * from './Layout';
export * from './MxLink';
export * from './OutputContainer';
export * from './TransactionsTable';
EOF

echo "✅ Components index.ts updated successfully!"

echo "Updating src/pages/Dashboard/widgets/Transactions.tsx file..."
cat > src/pages/Dashboard/widgets/Transactions.tsx << 'EOF'
import { useEffect, useState } from 'react';
import { getTransactions } from '@multiversx/sdk-dapp/out/apiCalls/transactions/getTransactions';
import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { ServerTransactionType } from '@multiversx/sdk-dapp/out/types/serverTransactions.types';
import { getActiveTransactionsStatus } from '@multiversx/sdk-dapp/out/utils/transactions/getActiveTransactionsStatus';
import { getInterpretedTransaction } from '@multiversx/sdk-dapp/out/utils/transactions/getInterpretedTransaction';
import { OutputContainer, TransactionsTable } from 'components';
import { contractAddress } from 'config';

export const Transactions = () => {
  const { address } = useGetAccount();
  const {
    network: { apiAddress, explorerAddress }
  } = useGetNetworkConfig();
  const { success } = getActiveTransactionsStatus(); // <-- will be used to trigger the fetching of transactions

  const [transactions, setTransactions] = useState<ServerTransactionType[]>([]);

  const fetchTransactions = async () => {
    try {
      const { data } = await getTransactions({
        apiAddress,
        sender: address,
        receiver: contractAddress ?? undefined,
        condition: 'must',
        transactionSize: 10,
        apiTimeout: 10000
      });

      const interpretedTransactions = data.map((transaction) =>
        getInterpretedTransaction({ transaction, address, explorerAddress })
      );

      setTransactions(interpretedTransactions);
    } catch (error) {
      console.error('Failed to fetch transactions', error);
    }
  };

  useEffect(() => {
    if (success) {
      fetchTransactions();
    }
  }, [success]);

  if (transactions.length === 0) {
    return (
      <OutputContainer>
        <p className='text-gray-400'>No transactions found</p>
      </OutputContainer>
    );
  }

  return (
    <div className='flex flex-col'>
      <OutputContainer className='p-0'>
        <div className='w-full h-full overflow-x-auto bg-white shadow rounded-lg'>
          <TransactionsTable transactions={transactions} />
        </div>
      </OutputContainer>
    </div>
  );
};
EOF

echo "✅ Transactions widget updated successfully!"

echo "Done: step_04_transactions_widget" >> progress.txt

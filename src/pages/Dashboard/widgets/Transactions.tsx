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
    fetchTransactions();
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

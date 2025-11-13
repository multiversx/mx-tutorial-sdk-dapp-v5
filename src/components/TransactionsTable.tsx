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

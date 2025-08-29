import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";

export async function step04TransactionsWidget(page: Page): Promise<void> {
  // Update components index.ts to export TransactionsTable
  await createTypewriterMessage(
    page,
    "Preparing to update TransactionsTable widget..."
  );
  await waitFor(1000);

  await navigateToFile(page, "MxLink.tsx");

  await createTypewriterMessage(
    page,
    "Creating TransactionsTable.tsx component..."
  );

  await createNewFile(page, "TransactionsTable.tsx");

  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "Pasting TransactionsTable.tsx structure..."
  );

  await waitFor(1000);

  await textEdit(page).pasteText(`import { useEffect, useState } from 'react';
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
        const [processedTransactions, setProcessedTransactions] = useState<
          TransactionsRowType[]
        >([]);

        return <MvxTransactionsTable transactions={processedTransactions} />;
    };`);

  await page.keyboard.press("Meta+s");

  await textEdit(page).goToTopOfFile();

  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "Hooking up the TransactionsTableController..."
  );

  await textEdit(page).newLineAt(17);

  await waitFor(1000);

  await textEdit(page).pasteText(`
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
      `);

  await waitFor(1000);

  await createTypewriterMessage(page, "Adding the address and network data...");

  await textEdit(page).newLineAt(14);

  await textEdit(page).pasteText(`
        const { address } = useGetAccount();
        const { network } = useGetNetworkConfig();
      `);

  await page.keyboard.press("Meta+s");

  await waitFor(1000);

  await createTypewriterMessage(page, "Adding the useEffect hook...");

  await textEdit(page).newLineAt(32);

  await textEdit(page).pasteText(`
      useEffect(() => {
        processTransactions();
      }, [transactions]);
    `);

  await page.keyboard.press("Meta+s");

  await waitFor(1000);

  await textEdit(page).goToTopOfFile();

  await createTypewriterMessage(
    page,
    "✅ Done. Now to export the component..."
  );

  await navigateToFile(page, "components/index.ts");

  await textEdit(page).newLineAt(7);

  await textEdit(page).pasteText(`export * from './TransactionsTable';`);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "✅ Done exporting TransactionsTable component"
  );

  await waitFor(500);

  await createTypewriterMessage(page, "Updating the Transactions widget...");

  await navigateToFile(page, "Transactions.tsx");

  await createTypewriterMessage(page, "Pasting the necessary imports...");

  await textEdit(page).selectLine(1);

  await textEdit(page).pasteText(`import { useEffect, useState } from 'react';
  import { getTransactions } from '@multiversx/sdk-dapp/out/apiCalls/transactions/getTransactions';
  import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
  import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
  import { ServerTransactionType } from '@multiversx/sdk-dapp/out/types/serverTransactions.types';
  import { getActiveTransactionsStatus } from '@multiversx/sdk-dapp/out/utils/transactions/getActiveTransactionsStatus';
  import { getInterpretedTransaction } from '@multiversx/sdk-dapp/out/utils/transactions/getInterpretedTransaction';
  import { OutputContainer, TransactionsTable } from 'components';
  import { contractAddress } from 'config';`);

  await createTypewriterMessage(
    page,
    "Using state to store the transactions..."
  );

  await textEdit(page).selectLine(12);

  await textEdit(page).pasteText(
    `const [transactions, setTransactions] = useState<ServerTransactionType[]>([]);`
  );

  await createTypewriterMessage(page, "Adding store data...");

  await textEdit(page).newLineAt(12);

  await textEdit(page).pasteText(`
      const { address } = useGetAccount();
    const {
      network: { apiAddress, explorerAddress }
    } = useGetNetworkConfig();
    const { success } = getActiveTransactionsStatus(); // <-- will be used to trigger the fetching of transactions
    `);

  await waitFor(500);

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");

  await textEdit(page).selectLine(16);

  await waitFor(1500);

  await createTypewriterMessage(
    page,
    "Adding the fetchTransactions function..."
  );

  await textEdit(page).newLineAt(19);

  await textEdit(page).pasteText(`
      const fetchTransactions = async () => {
      try {
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      }
    };

    useEffect(() => {
      fetchTransactions();
    }, [success]);
    `);

  await waitFor(500);

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");

  await textEdit(page).selectLine(28);

  await createTypewriterMessage(
    page,
    "Refetch all transactions when the latest pending transaction is confirmed..."
  );

  await createTypewriterMessage(
    page,
    "Linking the getTransactions function inside fetchTransactions()..."
  );

  await textEdit(page).newLineAt(22);

  await textEdit(page).pasteText(`const { data } = await getTransactions({
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

      setTransactions(interpretedTransactions);`);

  await waitFor(500);

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "Finally, using the TransactionsTable component..."
  );

  await textEdit(page).selectLine(57);

  await textEdit(page).pasteText(
    `<TransactionsTable transactions={transactions} />`
  );

  await waitFor(500);

  await textEdit(page).formatFile();

  await page.keyboard.press("Meta+s");

  await waitFor(500);

  await createTypewriterMessage(page, "✅ Done");

  // ends with Transactions.tsx updated, terminal closed
}

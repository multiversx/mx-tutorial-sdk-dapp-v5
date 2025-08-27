import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";

export async function step05PingPongWidget(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Creating the PingPong widget...");
  await page.waitForTimeout(1000);
  // Create contracts folder structure
  await createTypewriterMessage(page, "Creating contracts folder structure...");
  await navigateToFile(page, "package.json");
  //   Create contracts directory
  const contractsFolder = "src/contracts";
  await createNewFile(page, contractsFolder, Boolean(contractsFolder));
  await createNewFile(page, "src/contracts/ping-pong.abi.json");
  await waitFor(1000);
  await createTypewriterMessage(page, "Pasting ping-pong.abi.json content...");
  await textEdit(page).pasteText(`{
    "buildInfo": {
      "rustc": {
        "version": "1.61.0-nightly",
        "commitHash": "1d9c262eea411ec5230f8a4c9ba50b3647064da4",
        "commitDate": "2022-03-26",
        "channel": "Nightly",
        "short": "rustc 1.61.0-nightly (1d9c262ee 2022-03-26)"
      },
      "contractCrate": {
        "name": "ping-pong",
        "version": "0.0.2",
        "git_version": "23ff9bd"
      },
      "framework": {
        "name": "elrond-wasm",
        "version": "0.34.1"
      }
    },
    "docs": [
      "A contract that allows anyone to send a fixed sum, locks it for a while and then allows users to take it back.",
      "Sending funds to the contract is called 'ping'.",
      "Taking the same funds back is called 'pong'.",
      "",
      "Restrictions:",
      "- Only the set amount can be 'ping'-ed, no more, no less.",
      "- 'pong' can only be called after a certain period after 'ping'."
    ],
    "name": "PingPong",
    "constructor": {
      "docs": [
        "Necessary configuration when deploying:",
        "'ping_amount' - the exact amount that needs to be sent when 'ping'-ing.  ",
        "'duration_in_seconds' - how much time (in seconds) until 'pong' can be called after the initial 'ping' call  ",
        "'token_id' - Optional. The Token Identifier of the token that is going to be used. Default is 'EGLD'."
      ],
      "inputs": [
        {
          "name": "ping_amount",
          "type": "BigUint"
        },
        {
          "name": "duration_in_seconds",
          "type": "u64"
        },
        {
          "name": "opt_token_id",
          "type": "optional<EgldOrEsdtTokenIdentifier>",
          "multi_arg": true
        }
      ],
      "outputs": []
    },
    "endpoints": [
      {
        "docs": [
          "User sends some tokens to be locked in the contract for a period of time."
        ],
        "name": "ping",
        "mutability": "mutable",
        "payableInTokens": ["*"],
        "inputs": [],
        "outputs": []
      },
      {
        "docs": [
          "User can take back funds from the contract.",
          "Can only be called after expiration."
        ],
        "name": "pong",
        "mutability": "mutable",
        "inputs": [],
        "outputs": []
      },
      {
        "name": "didUserPing",
        "mutability": "readonly",
        "inputs": [
          {
            "name": "address",
            "type": "Address"
          }
        ],
        "outputs": [
          {
            "type": "bool"
          }
        ]
      },
      {
        "name": "getPongEnableTimestamp",
        "mutability": "readonly",
        "inputs": [
          {
            "name": "address",
            "type": "Address"
          }
        ],
        "outputs": [
          {
            "type": "u64"
          }
        ]
      },
      {
        "name": "getTimeToPong",
        "mutability": "readonly",
        "inputs": [
          {
            "name": "address",
            "type": "Address"
          }
        ],
        "outputs": [
          {
            "type": "optional<u64>",
            "multi_result": true
          }
        ]
      },
      {
        "name": "getAcceptedPaymentToken",
        "mutability": "readonly",
        "inputs": [],
        "outputs": [
          {
            "type": "EgldOrEsdtTokenIdentifier"
          }
        ]
      },
      {
        "name": "getPingAmount",
        "mutability": "readonly",
        "inputs": [],
        "outputs": [
          {
            "type": "BigUint"
          }
        ]
      },
      {
        "name": "getDurationTimestamp",
        "mutability": "readonly",
        "inputs": [],
        "outputs": [
          {
            "type": "u64"
          }
        ]
      },
      {
        "name": "getUserPingTimestamp",
        "mutability": "readonly",
        "inputs": [
          {
            "name": "address",
            "type": "Address"
          }
        ],
        "outputs": [
          {
            "type": "u64"
          }
        ]
      }
    ],
    "events": [
      {
        "identifier": "pongEvent",
        "inputs": [
          {
            "name": "user",
            "type": "Address",
            "indexed": true
          }
        ]
      }
    ],
    "hasCallback": false,
    "types": []
  }`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await textEdit(page).goToTopOfFile();
  await createTypewriterMessage(
    page,
    "✅ ping-pong.abi.json created successfully!"
  );
  //   Create hooks folder structure
  await createTypewriterMessage(page, "Creating hooks folder structure...");
  await navigateToFile(page, "src/pages/Dashboard/widgets/index.ts");
  const hooksFolder = "hooks";
  await createNewFile(page, hooksFolder, Boolean(hooksFolder));
  await createNewFile(page, "hooks/useGetScController.ts");
  await waitFor(1000);
  await createTypewriterMessage(page, "Creating useGetScController.ts hook...");
  await textEdit(page).pasteText(`import {
        AbiRegistry,
        ProxyNetworkProvider,
        SmartContractController
      } from '@multiversx/sdk-core';
      import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
      import pingPongAbi from 'contracts/ping-pong.abi.json';
  
      export const useGetScController = () => {
        const { network } = useGetNetworkConfig();
        const proxy = new ProxyNetworkProvider(network.apiAddress);
        const abi = AbiRegistry.create(pingPongAbi);
        const scController = new SmartContractController({
          chainID: network.chainId,
          networkProvider: proxy,
          abi
        });

        return scController;
      };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ useGetScController hook created successfully!"
  );

  // Create useGetSmartContractFactory hook
  await createNewFile(page, "useGetSmartContractFactory.ts");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Creating useGetSmartContractFactory.ts hook..."
  );
  await textEdit(page).pasteText(`import {
        AbiRegistry,
        SmartContractTransactionsFactory,
        TransactionsFactoryConfig
      } from '@multiversx/sdk-core';
      import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
      import pingPongAbi from 'contracts/ping-pong.abi.json';

      export const useGetSmartContractFactory = () => {
        const { network } = useGetNetworkConfig();
        const abi = AbiRegistry.create(pingPongAbi);
        const factory = new SmartContractTransactionsFactory({
          config: new TransactionsFactoryConfig({
            chainID: network.chainId
          }),
          abi
        });

        return factory;
      };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ useGetSmartContractFactory hook created successfully!"
  );

  // Create useGetPingAmount hook
  await createNewFile(page, "useGetPingAmount.ts");
  await waitFor(1000);
  await createTypewriterMessage(page, "Creating useGetPingAmount.ts hook...");
  await textEdit(page).pasteText(`import { useEffect, useState } from 'react';
      import { Address } from '@multiversx/sdk-core';
      import { contractAddress } from 'config';
      import { useGetScController } from './useGetScController';

      export const useGetPingAmount = () => {
        const scController = useGetScController();
        const [pingAmount, setPingAmount] = useState<string>('0');

        const getPingAmount = async () => {
          try {
            const [result] = await scController.query({
              contract: Address.newFromBech32(contractAddress),
              function: 'getPingAmount',
              arguments: []
            });
            setPingAmount(result?.valueOf()?.toString(10));
          } catch (err) {
            console.error('Unable to call getPingAmount', err);
          }
        };

        useEffect(() => {
          getPingAmount();
        }, []);

        return pingAmount;
      };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ useGetPingAmount hook created successfully!"
  );

  // Create useGetTimeToPong hook
  await createNewFile(page, "useGetTimeToPong.ts");
  await waitFor(1000);
  await createTypewriterMessage(page, "Creating useGetTimeToPong.ts hook...");
  await textEdit(page)
    .pasteText(`import { Address, AddressValue } from '@multiversx/sdk-core';
      import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
      import { contractAddress } from 'config';
      import { useGetScController } from './useGetScController';

      export const useGetTimeToPong = () => {
        const { address } = useGetAccount();
        const scController = useGetScController();

        const getTimeToPong = async () => {
          if (!address) {
            return;
          }
          try {
            const result = await scController.query({
              contract: Address.newFromBech32(contractAddress),
              function: 'getTimeToPong',
              arguments: [new AddressValue(new Address(address))]
            });
            const time = result.toString();
            const secondsRemaining = time ? Number(result.toString()) : null;
            return secondsRemaining;
          } catch (err) {
            console.error('Unable to call getTimeToPong', err);
          }
        };

        return getTimeToPong;
      };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ useGetTimeToPong hook created successfully!"
  );

  // Create useGetSecondsRemaining hook
  await createNewFile(page, "useGetSecondsRemaining.ts");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Creating useGetSecondsRemaining hook..."
  );
  await textEdit(page).pasteText(`import { useEffect, useState } from 'react';
    import { useGetPendingTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactions';
    import { useGetTimeToPong } from './useGetTimeToPong';

    export const useGetSecondsRemaining = () => {
      const getTimeToPong = useGetTimeToPong();
      const transactions = useGetPendingTransactions();
      const hasPendingTransactions = transactions.length > 0;
      const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);
      const [countdownSeconds, setCountdownSeconds] = useState(0);

      const getSecondsRemaining = async () => {
        const secondsToPong = await getTimeToPong();
        setSecondsRemaining(secondsToPong ?? null);
        if (secondsToPong != null) {
          setCountdownSeconds(secondsToPong);
        }
      };

      useEffect(() => {
        getSecondsRemaining();
      }, [hasPendingTransactions]);

      useEffect(() => {
        if (!secondsRemaining) {
          return;
        }
        const interval = setInterval(() => {
          setCountdownSeconds((existing) => {
            if (existing) {
              return existing - 1;
            } else {
              clearInterval(interval);
              return 0;
            }
          });
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      }, [secondsRemaining]);

      return { secondsRemaining, countdownSeconds };
    };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ useGetSecondsRemaining hook created successfully!"
  );

  // Create useSendPingTransaction hook
  await createNewFile(page, "useSendPingTransaction.ts");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Creating useSendPingTransaction hook..."
  );
  await textEdit(page)
    .pasteText(`import { Address } from '@multiversx/sdk-core';
    import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
    import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
    import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
    import { contractAddress } from 'config';
    import { useGetPingAmount } from './useGetPingAmount';
    import { useGetSmartContractFactory } from './useGetSmartContractFactory';

    export const useSendPingTransaction = () => {
      const { address } = useGetAccount();
      const scFactory = useGetSmartContractFactory();
      const amount = useGetPingAmount();
      return async () => {
        const provider = getAccountProvider();
        const pingTransaction = await scFactory.createTransactionForExecute(
          new Address(address),
          {
            gasLimit: BigInt(6000000),
            function: 'ping',
            contract: new Address(contractAddress),
            nativeTransferAmount: BigInt(amount)
          }
        );
        const txManager = TransactionManager.getInstance();
        const signedTransactions = await provider.signTransactions([
          pingTransaction
        ]);
        const sentTransactions = await txManager.send(signedTransactions);
        await txManager.track(sentTransactions, {
          transactionsDisplayInfo: {
            processingMessage: 'Processing Ping transaction',
            errorMessage: 'An error has occured during Ping',
            successMessage: 'Ping transaction successful'
          }
        });
      };
    };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await textEdit(page).goToTopOfFile();
  await createTypewriterMessage(
    page,
    "✅ useSendPingTransaction hook created successfully!"
  );

  // Create useSendPongTransaction hook
  await createNewFile(page, "useSendPongTransaction.ts");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "Creating useSendPongTransaction hook..."
  );
  await textEdit(page)
    .pasteText(`import { Address } from '@multiversx/sdk-core';
    import { TransactionManager } from '@multiversx/sdk-dapp/out/managers/TransactionManager';
    import { getAccountProvider } from '@multiversx/sdk-dapp/out/providers/helpers/accountProvider';
    import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
    import { contractAddress } from 'config';
    import { useGetSmartContractFactory } from './useGetSmartContractFactory';
    
    export const useSendPongTransaction = () => {
      const scFactory = useGetSmartContractFactory();
      const { address } = useGetAccount();
      return async () => {
        const provider = getAccountProvider();
        const pongTransaction = await scFactory.createTransactionForExecute(
          new Address(address),
          {
            gasLimit: BigInt(6000000),
            function: 'pong',
            contract: new Address(contractAddress),
            nativeTransferAmount: BigInt(0)
          }
        );
        const txManager = TransactionManager.getInstance();
        const signedTransactions = await provider.signTransactions([
          pongTransaction
        ]);
        const sentTransactions = await txManager.send(signedTransactions);
        await txManager.track(sentTransactions, {
          transactionsDisplayInfo: {
            processingMessage: 'Processing Pong transaction',
            errorMessage: 'An error has occured during Pong',
            successMessage: 'Pong transaction successful'
          }
        });
      };
    };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await textEdit(page).goToTopOfFile();
  await createTypewriterMessage(
    page,
    "✅ useSendPongTransaction hook created successfully!"
  );

  // Create hooks index.ts file
  await createNewFile(page, "index.ts");
  await waitFor(1000);
  await createTypewriterMessage(page, "Exporting the newhooks...");
  await textEdit(page).pasteText(`export * from './useGetSecondsRemaining';
    export * from './useSendPingTransaction';
    export * from './useSendPongTransaction';`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);
  await createTypewriterMessage(
    page,
    "✅ Hooks index.ts file created successfully!"
  );
  // Create PingPongAbi.tsx component
  await navigateToFile(page, "PingPongAbi.tsx");
  await waitFor(1000);
  await createTypewriterMessage(page, "Pasting PingPongAbi.tsx component...");

  await page.keyboard.press("Meta+a");
  await waitFor(1000);

  await textEdit(page)
    .pasteText(`import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { useGetPendingTransactions } from '@multiversx/sdk-dapp/out/react/transactions/useGetPendingTransactions';
  import moment from 'moment';
  import { Button, Label, OutputContainer } from 'components';
  import { contractAddress } from 'config';
  import {
    useSendPingTransaction,
    useSendPongTransaction,
    useGetSecondsRemaining
  } from './hooks';

  export const PingPongAbi = () => {
    const transactions = useGetPendingTransactions();
    const hasPendingTransactions = transactions.length > 0;
    const sendPingTransactionFromAbi = useSendPingTransaction();
    const sendPongTransactionFromAbi = useSendPongTransaction();
    const { secondsRemaining, countdownSeconds } = useGetSecondsRemaining();

    const timeRemaining = moment()
      .startOf('day')
      .seconds(countdownSeconds)
      .format('mm:ss');

    const pongAllowed = secondsRemaining != null && countdownSeconds === 0;
    const hasPing = secondsRemaining == null;

    return (
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-start gap-2'>
            <Button
              disabled={!hasPing || hasPendingTransactions}
              onClick={sendPingTransactionFromAbi}
              className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:!text-black disabled:cursor-not-allowed'
            >
              <FontAwesomeIcon icon={faArrowUp} className='mr-1' />
              Ping
            </Button>
            <Button
              disabled={!pongAllowed || hasPing || hasPendingTransactions}
              onClick={sendPongTransactionFromAbi}
              className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 mr-0 disabled:bg-gray-200 disabled:!text-black disabled:cursor-not-allowed'
            >
              <FontAwesomeIcon icon={faArrowDown} className='mr-1' />
              Pong
            </Button>
          </div>
        </div>
        <OutputContainer>
          <>
            <p>
              <Label>Contract: </Label>
              <span className='truncate'>{contractAddress}</span>
            </p>
            {countdownSeconds > 0 && (
              <p>
                <Label>Time remaining: </Label>
                <span className='text-red-600'>{timeRemaining}</span> until able
                to pong
              </p>
            )}
          </>
        </OutputContainer>
      </div>
    );
  };`);
  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await textEdit(page).goToTopOfFile();
  await createTypewriterMessage(
    page,
    "✅ PingPongAbi.tsx component created successfully!"
  );

  // ends with src/pages/Dashboard/widgets/PingPongAbi.tsx
  console.log("PingPong widget creation completed");
}

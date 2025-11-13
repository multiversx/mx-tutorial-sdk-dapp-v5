import { Address } from '@multiversx/sdk-core';
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
};

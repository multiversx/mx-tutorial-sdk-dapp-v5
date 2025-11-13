import { Address } from '@multiversx/sdk-core';
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
};

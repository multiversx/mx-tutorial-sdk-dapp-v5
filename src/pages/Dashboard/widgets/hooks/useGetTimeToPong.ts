import { Address, AddressValue } from '@multiversx/sdk-core';
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
};

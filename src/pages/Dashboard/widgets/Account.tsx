import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
import { FormatAmount, Label, OutputContainer } from 'components';

export const Account = () => {
  const { address, balance, shard } = useGetAccount();

  return (
    <OutputContainer>
      <div className='flex flex-col text-black' data-testid='topInfo'>
        <p className='truncate'>
          <Label>Address: </Label>
          <span data-testid='accountAddress'> {address}</span>
        </p>

        <p>
          <Label>Shard: </Label> {shard}
        </p>

        <p>
          <Label>Balance: </Label>
          <FormatAmount value={balance} />
        </p>
      </div>
    </OutputContainer>
  );
};

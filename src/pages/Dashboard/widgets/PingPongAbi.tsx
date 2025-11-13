import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
};

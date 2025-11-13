import { useEffect, useState } from 'react';
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
};

import { OutputContainer } from 'components';

export const Transactions = () => {
  const transactions = []; // TODO: Replace with the actual transactions

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
          {/* TODO: Add transactions table here */}
        </div>
      </OutputContainer>
    </div>
  );
};

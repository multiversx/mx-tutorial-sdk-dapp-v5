import { ReactElement } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Widget = ({
  title,
  description,
  reference,
  widget: MxWidget
}: WidgetType) => {
  return (
    <div className='flex flex-col flex-1 rounded-xl bg-white p-6 justify-center'>
      <h2 className='flex text-xl font-medium group'>
        {title}
        <a
          href={reference}
          target='_blank'
          className='hidden group-hover:block ml-2 text-blue-600'
        >
          <FontAwesomeIcon icon={faInfoCircle} size='sm' />
        </a>
      </h2>
      {description && <p className='text-gray-400 mb-6'>{description}</p>}
      <MxWidget />
    </div>
  );
};

export type WidgetType = {
  description?: string;
  reference: string;
  title: string;
  widget: () => ReactElement;
};

#!/bin/bash

echo "=== Creating FormatAmount component for account widget ==="

# Navigate to root directory
cd ../../

echo "Creating FormatAmount.tsx component..."
cat > src/components/FormatAmount.tsx << 'EOF'
import { FormatAmountController } from '@multiversx/sdk-dapp/out/controllers/FormatAmountController';
import { useGetNetworkConfig } from '@multiversx/sdk-dapp/out/react/network/useGetNetworkConfig';
import { MvxFormatAmount } from '@multiversx/sdk-dapp-ui/react';
import type { MvxFormatAmount as MvxFormatAmountPropsType } from '@multiversx/sdk-dapp-ui/web-components/mvx-format-amount';
import { DECIMALS, DIGITS } from '@multiversx/sdk-dapp-utils/out/constants';

interface IFormatAmountProps extends Partial<MvxFormatAmountPropsType> {
  value: string;
  className?: string;
  'data-testid'?: string;
}

export const FormatAmount = (props: IFormatAmountProps) => {
  const {
    network: { egldLabel }
  } = useGetNetworkConfig();

  const { isValid, valueDecimal, valueInteger, label } =
    FormatAmountController.getData({
      digits: DIGITS,
      decimals: DECIMALS,
      egldLabel,
      ...props,
      input: props.value
    });

  return (
    <MvxFormatAmount
      class={props.className}
      dataTestId={props['data-testid']}
      isValid={isValid}
      label={label}
      showLabel={props.showLabel}
      valueDecimal={valueDecimal}
      valueInteger={valueInteger}
    />
  );
};
EOF

echo "✅ FormatAmount component created successfully!"

echo "=== Updating components index.ts ==="

echo "Updating src/components/index.ts file..."
cat > src/components/index.ts << 'EOF'
export * from './Button';
export * from './FormatAmount';
export * from './Label';
export * from './Layout';
export * from './MxLink';
export * from './OutputContainer';
EOF

echo "✅ Components index.ts updated successfully!"

echo "=== Updating Account widget with SDK integration ==="

echo "Updating src/pages/Dashboard/widgets/Account.tsx file..."
cat > src/pages/Dashboard/widgets/Account.tsx << 'EOF'
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
EOF

echo "✅ Account widget updated successfully!"

echo "Done: step_03_account_widget" >> progress.txt

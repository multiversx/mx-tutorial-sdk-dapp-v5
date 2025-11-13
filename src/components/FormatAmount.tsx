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
      showLabel
      valueDecimal={valueDecimal}
      valueInteger={valueInteger}
    />
  );
};

import { Page } from "@playwright/test";
import { createTypewriterMessage } from "../../utils/typewriter-helper";
import { createNewFile, navigateToFile, textEdit, waitFor } from "../helpers";
import { typeAndEnter } from "../../utils/type-helper";

export async function step03AccountWidget(page: Page): Promise<void> {
  await createTypewriterMessage(page, "Preparing to update Account widget...");
  await page.waitForTimeout(1000);

  await createTypewriterMessage(page, "Creating FormatAmount.tsx component...");

  await navigateToFile(page, "Button.tsx");

  await createNewFile(page, "FormatAmount.tsx");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "Pasting FormatAmount component content..."
  );

  await textEdit(page).pasteText(
    `import { FormatAmountController } from '@multiversx/sdk-dapp/out/controllers/FormatAmountController';
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
  };`
  );

  await textEdit(page).goToTopOfFile();

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "✅ FormatAmount component created successfully!"
  );

  // Update components index.ts
  await createTypewriterMessage(page, "Updating components index.ts...");

  await navigateToFile(page, "src/components/index.ts");
  await waitFor(1000);

  await createTypewriterMessage(
    page,
    "Adding FormatAmount to components index.ts..."
  );

  await textEdit(page).newLineAt(2);

  await textEdit(page).pasteText(`export * from './FormatAmount';`);

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await createTypewriterMessage(page, "✅ Done");

  // Update Account widget
  await createTypewriterMessage(
    page,
    "Updating Account widget with account information..."
  );

  await navigateToFile(page, "Account.tsx");
  await waitFor(1000);

  await createTypewriterMessage(page, "Adding sdk-dapp imports...");

  await textEdit(page).selectLine(1);

  await textEdit(page).pasteText(
    `import { useGetAccount } from '@multiversx/sdk-dapp/out/react/account/useGetAccount';
    import { FormatAmount, Label, OutputContainer } from 'components';`
  );

  await textEdit(page).formatFile();

  await textEdit(page).newLineAt(5);

  await typeAndEnter(
    page,
    "const { address, balance, shard } = useGetAccount();"
  );

  await page.keyboard.press("Meta+s");
  await waitFor(1000);

  await textEdit(page).selectLine(12);

  await textEdit(page).pasteText(
    `<span data-testid='accountAddress'> {address}</span>`
  );

  await textEdit(page).selectLine(16);

  await textEdit(page).pasteText(`<Label>Shard: </Label> {shard}`);

  await textEdit(page).selectLine(21);

  await textEdit(page).formatFile();

  await textEdit(page).pasteText(`<FormatAmount value={balance} />`);

  await waitFor(1000);

  await page.keyboard.press("Meta+s");

  await createTypewriterMessage(
    page,
    "✅ Account widget updated successfully!"
  );

  // ends with FormatAmount.tsx, index.ts, and Account.tsx updated, terminal closed

  console.log(
    "FormatAmount component, components index, and Account widget update completed"
  );
}

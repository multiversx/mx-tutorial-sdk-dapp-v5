import { step01InitApp } from "./step_01_init_app";
import { step02UnlockPanelAndHeader } from "./step_02_unlock_panel_and_header";
import { step03AccountWidget } from "./step_03_account_widget";
import { step04TransactionsWidget } from "./step_04_transactions_widget";

// Define steps with descriptions and functions in a single array
export const video06steps = [
  // {
  //   description: "Initialize SDK in main.tsx",
  //   function: step01InitApp,
  // },
  // {
  //   description: "Update Unlock component and Header navigation",
  //   function: step02UnlockPanelAndHeader,
  // },
  // {
  //   description: "Create FormatAmount component for account widget",
  //   function: step03AccountWidget,
  // },
  {
    description: "Create TransactionsTable and update Transactions widget",
    function: step04TransactionsWidget,
  },
];

import { step01InitApp } from "./step_01_init_app";
import { step02UnlockPanelAndHeader } from "./step_02_unlock_panel_and_header";
import { step03AccountWidget } from "./step_03_account_widget";
import { step04TransactionsWidget } from "./step_04_transactions_widget";
import { step05PingPongWidget } from "./step_05_ping_pong_widget";

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
  // {
  //   description: "Create TransactionsTable and update Transactions widget",
  //   function: step04TransactionsWidget,
  // },
  {
    description: "Create PingPong widget with contract ABI",
    function: step05PingPongWidget,
  },
];

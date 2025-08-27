import { step01CreateGenericLinkComponent } from "./step_01_create_generic_link_component";
import { step02CreateUnlockPage } from "./step_02_create_unlock_page";
import { step03CreateHeaderComponent } from "./step_03_create_header_component";
import { step04CreateFooterComponent } from "./step_04_create_footer_component";
import { step05UpdateLayoutComponent } from "./step_05_update_layout_component";
import { step06CreateTransactionsWidget } from "./step_06_create_transactions_widget";
import { step07UpdateDashboardPage } from "./step_07_update_dashboard_page";
import { step08RunLint } from "./step_08_run_lint";

// Define steps with descriptions and functions in a single array
export const video05steps = [
  // {
  //   description: "Create generic link component",
  //   function: step01CreateGenericLinkComponent,
  // },
  // {
  //   description: "Create Unlock page",
  //   function: step02CreateUnlockPage,
  // },
  // {
  //   description: "Create Header component",
  //   function: step03CreateHeaderComponent,
  // },
  // {
  //   description: "Create Footer component",
  //   function: step04CreateFooterComponent,
  // },
  // {
  //   description: "Update Layout component",
  //   function: step05UpdateLayoutComponent,
  // },
  {
    description: "Create Transactions widget",
    function: step06CreateTransactionsWidget,
  },
  {
    description: "Update Dashboard page",
    function: step07UpdateDashboardPage,
  },
  {
    description: "Run lint to fix errors",
    function: step08RunLint,
  },
];

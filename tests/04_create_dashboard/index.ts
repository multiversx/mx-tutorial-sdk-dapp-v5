import { step01CreateConfigs } from "./step_01_create_configs";
import { step02CreateDashboardFolder } from "./step_02_create_dashboard_folder";
import { step03InstallFontawesome } from "./step_03_install_fontawesome";
import { step04CreateHelperComponents } from "./step_04_create_helper_components";
import { step05CreateAccountWidget } from "./step_05_create_account_widget";
import { step06CreatePingpongWidget } from "./step_06_create_pingpong_widget";
import { step07CreateWidgetsIndex } from "./step_07_create_widgets_index";
import { step08CreateDashboardPage } from "./step_08_create_dashboard_page";
import { step09ExportDashboard } from "./step_09_export_dashboard";
import { step10UpdateRoutes } from "./step_10_update_routes";
import { step11RunLint } from "./step_11_run_lint";

// Define steps with descriptions and functions in a single array
export const video04steps = [
  {
    description: "Create configs for our dApp",
    function: step01CreateConfigs,
  },
  {
    description: "Create the dashboard folder structure",
    function: step02CreateDashboardFolder,
  },
  {
    description: "Install FontAwesome and classnames",
    function: step03InstallFontawesome,
  },
  {
    description: "Create helper components (Button, Label, OutputContainer)",
    function: step04CreateHelperComponents,
  },
  {
    description: "Create the Account widget",
    function: step05CreateAccountWidget,
  },
  {
    description: "Create the PingPongAbi widget",
    function: step06CreatePingpongWidget,
  },
  {
    description: "Create widgets index file",
    function: step07CreateWidgetsIndex,
  },
  {
    description: "Create the Dashboard page",
    function: step08CreateDashboardPage,
  },
  {
    description: "Export the Dashboard page",
    function: step09ExportDashboard,
  },
  {
    description: "Update the routes configuration",
    function: step10UpdateRoutes,
  },
  {
    description: "Run lint to fix errors",
    function: step11RunLint,
  },
];

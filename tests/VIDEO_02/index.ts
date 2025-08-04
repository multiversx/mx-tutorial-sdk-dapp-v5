import { step01InstallReactRouterDom } from "./step_01_install_react_router_dom";
import { step02CreateHomePage } from "./step_02_create_home_page";
import { step03CreateRoutesFolder } from "./step_03_create_routes_folder";
import { step04CreateRoutesFiles } from "./step_04_create_routes_files";
import { step05CreateLayoutComponent } from "./step_05_create_layout_component";
import { step06UpdateApp } from "./step_06_update_app";
import { step07RunLint } from "./step_07_run_lint";

// Define steps with descriptions and functions in a single array
export const video02steps = [
  {
    description: "Install react-router-dom",
    function: step01InstallReactRouterDom,
  },
  {
    description: "Create pages folder and Home page",
    function: step02CreateHomePage,
  },
  {
    description: "Create routes folder",
    function: step03CreateRoutesFolder,
  },
  {
    description: "Create routes configuration files",
    function: step04CreateRoutesFiles,
  },
  {
    description: "Create Layout component",
    function: step05CreateLayoutComponent,
  },
  {
    description: "Update App.tsx file",
    function: step06UpdateApp,
  },
  {
    description: "Run lint to fix errors",
    function: step07RunLint,
  },
];

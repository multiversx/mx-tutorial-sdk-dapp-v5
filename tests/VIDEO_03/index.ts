import { step01InstallSdks } from "./step_01_install_sdks";
import { step02CreateLibStructure } from "./step_02_create_lib_structure";

// Define steps with descriptions and functions in a single array
export const video03steps = [
  {
    description: "Install MultiversX SDK packages",
    function: step01InstallSdks,
  },
  {
    description: "Create lib folder structure for SDK re-exports",
    function: step02CreateLibStructure,
  },
];

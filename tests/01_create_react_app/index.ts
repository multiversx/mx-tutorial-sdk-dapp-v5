import { step01CreateProject } from "./step_01_create_project";
import { step02InstallDependencies } from "./step_02_install_dependencies";
import { step04InstallTailwind } from "./step_03_install_tailwind";
import { step05AddTailwindConfig } from "./step_04_add_tailwind_css";
import { step06AddPostcssConfig } from "./step_05_add_postcss_config";
import { step07ReplaceIndexCss } from "./step_06_replace_index_css";
import { step08CopySvgFile } from "./step_07_copy_svg_file";
import { step10ConfigureEslintPrettier } from "./step_08_configure_eslint_prettier";
import { step11ConfigurePrettierrc } from "./step_09_configure_prettierrc";
import { step12ConfigureEslintConfig } from "./step_10_configure_eslint_config";
import { step13ConfigureVite } from "./step_11_configure_vite";
import { step14ConfigureViteConfig } from "./step_12_configure_vite_config";
import { step15ConfigureTsconfig } from "./step_13_configure_tsconfig";
import { step16AddFormattingScripts } from "./step_14_add_formatting_scripts";
import { step15RunLint } from "./step_15_run_lint";
import { step16StartDevServer } from "./step_16_start_dev_server";

// Define steps with descriptions and functions in a single array
export const video01steps = [
  {
    description: "Create new Vite React project",
    function: step01CreateProject,
  },
  {
    description: "Install dependencies",
    function: step02InstallDependencies,
  },
  // {
  //   description: "Install Tailwind CSS",
  //   function: step04InstallTailwind,
  // },
  // {
  //   description: "Add tailwind.config.js",
  //   function: step05AddTailwindConfig,
  // },
  // {
  //   description: "Add postcss.config.js",
  //   function: step06AddPostcssConfig,
  // },
  // {
  //   description: "Replace contents of src/index.css",
  //   function: step07ReplaceIndexCss,
  // },
  // {
  //   description: "Copy the multiversx-white.svg file to the public folder",
  //   function: step08CopySvgFile,
  // },
  // {
  //   description: "Configure eslint and prettier",
  //   function: step10ConfigureEslintPrettier,
  // },
  // {
  //   description: "Configure .prettierrc",
  //   function: step11ConfigurePrettierrc,
  // },
  // {
  //   description: "Configure eslint.config.js",
  //   function: step12ConfigureEslintConfig,
  // },
  // {
  //   description: "Configure vite",
  //   function: step13ConfigureVite,
  // },
  // {
  //   description: "Configure vite.config.ts",
  //   function: step14ConfigureViteConfig,
  // },
  // {
  //   description: "Configure tsconfig.json",
  //   function: step15ConfigureTsconfig,
  // },
  // {
  //   description: "Add formatting scripts",
  //   function: step16AddFormattingScripts,
  // },
  // {
  //   description: "Run lint",
  //   function: step15RunLint,
  // },
  // {
  //   description: "Check if the project is running",
  //   function: step16StartDevServer,
  // },
];

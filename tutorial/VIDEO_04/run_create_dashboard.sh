#!/bin/bash

echo "🚀 MultiversX Dashboard Creation Script"
echo "======================================"
echo ""
echo "This script will create the dashboard page with account, ping-pong and transaction history widgets."
echo "Running dashboard creation..."
echo ""

# Step 1
echo "Running Step 1: Creating configs for our dApp"
./step_01_create_configs.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 1 failed. Stopping."
    exit 1
fi
echo "✅ Step 1 completed"
echo ""

# Step 2
echo "Running Step 2: Creating the dashboard folder"
./step_02_create_dashboard_folder.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 2 failed. Stopping."
    exit 1
fi
echo "✅ Step 2 completed"
echo ""

# Step 3
echo "Running Step 3: Installing FontAwesome and classnames"
./step_03_install_fontawesome.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 3 failed. Stopping."
    exit 1
fi
echo "✅ Step 3 completed"
echo ""

# Step 4
echo "Running Step 4: Creating helper components"
./step_04_create_helper_components.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 4 failed. Stopping."
    exit 1
fi
echo "✅ Step 4 completed"
echo ""

# Step 5
echo "Running Step 5: Creating the Account widget"
./step_05_create_account_widget.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 5 failed. Stopping."
    exit 1
fi
echo "✅ Step 5 completed"
echo ""

# Step 6
echo "Running Step 6: Creating the PingPongAbi widget"
./step_06_create_pingpong_widget.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 6 failed. Stopping."
    exit 1
fi
echo "✅ Step 6 completed"
echo ""

# Step 7
echo "Running Step 7: Creating widgets index file"
./step_07_create_widgets_index.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 7 failed. Stopping."
    exit 1
fi
echo "✅ Step 7 completed"
echo ""

# Step 8
echo "Running Step 8: Creating the Dashboard page"
./step_08_create_dashboard_page.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 8 failed. Stopping."
    exit 1
fi
echo "✅ Step 8 completed"
echo ""

# Step 9
echo "Running Step 9: Exporting the Dashboard page"
./step_09_export_dashboard.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 9 failed. Stopping."
    exit 1
fi
echo "✅ Step 9 completed"
echo ""

# Step 10
echo "Running Step 10: Updating routes"
./step_10_update_routes.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 10 failed. Stopping."
    exit 1
fi
echo "✅ Step 10 completed"
echo ""

# Step 11
echo "Running Step 11: Running lint"
./step_11_run_lint.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 11 failed. Stopping."
    exit 1
fi
echo "✅ Step 11 completed"
echo ""

echo "🎉 Dashboard creation completed successfully!"
echo ""
echo "You can now view your dashboard with account and ping-pong widgets!"
echo ""
echo "To start the development server with DevNet config, run:"
echo "  yarn start-devnet" 
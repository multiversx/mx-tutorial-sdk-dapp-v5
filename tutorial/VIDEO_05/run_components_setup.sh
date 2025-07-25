#!/bin/bash

echo "🚀 MultiversX Components Setup Script"
echo "======================================"
echo ""
echo "This script will create UI components for the dApp including:"
echo "- Generic MxLink component"
echo "- Unlock page"
echo "- Header and Footer components"
echo "- Transactions widget"
echo "- Updated Layout and Dashboard pages"
echo ""

# Step 1
echo "Running Step 1: Create generic link component"
./step_01_create_generic_link_component.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 1 failed. Stopping."
    exit 1
fi
echo "✅ Step 1 completed"
echo ""

# Step 2
echo "Running Step 2: Create Unlock page"
./step_02_create_unlock_page.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 2 failed. Stopping."
    exit 1
fi
echo "✅ Step 2 completed"
echo ""

# Step 3
echo "Running Step 3: Create Header component"
./step_03_create_header_component.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 3 failed. Stopping."
    exit 1
fi
echo "✅ Step 3 completed"
echo ""

# Step 4
echo "Running Step 4: Create Footer component"
./step_04_create_footer_component.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 4 failed. Stopping."
    exit 1
fi
echo "✅ Step 4 completed"
echo ""

# Step 5
echo "Running Step 5: Update Layout component"
./step_05_update_layout_component.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 5 failed. Stopping."
    exit 1
fi
echo "✅ Step 5 completed"
echo ""

# Step 6
echo "Running Step 6: Create Transactions widget"
./step_06_create_transactions_widget.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 6 failed. Stopping."
    exit 1
fi
echo "✅ Step 6 completed"
echo ""

# Step 7
echo "Running Step 7: Update Dashboard page"
./step_07_update_dashboard_page.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 7 failed. Stopping."
    exit 1
fi
echo "✅ Step 7 completed"
echo ""

# Step 8
echo "Running Step 8: Run lint to fix any errors"
./step_08_run_lint.sh
if [ $? -ne 0 ]; then
    echo "❌ Step 8 failed. Stopping."
    exit 1
fi
echo "✅ Step 8 completed"
echo ""

echo "🎉 Components setup completed successfully!"
echo ""
echo "All UI components have been created and configured!"
echo "Code has been linted and formatted."
echo "You can now start building your MultiversX dApp with a complete UI structure!" 
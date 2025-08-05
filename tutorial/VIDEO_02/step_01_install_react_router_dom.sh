#!/bin/bash

echo "=== Installing react-router-dom ==="

# Navigate to root directory
cd ../../

echo "Installing react-router-dom..."
type_and_execute "yarn add react-router-dom"

echo "Done: step_01_install_react_router_dom" >> progress.txt

#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 3: Initialize git repository & create first commit ==="

cd ../../

# Initialize git repository and create first commit
type_and_execute "git init"
type_and_execute "git add ."
type_and_execute "git commit -m \"01. Initial commit\""

echo "✅ Git repository initialized and first commit created!"

echo "Done: step_03_initialize_git" >> progress.txt
echo "Next: step_04_install_tailwind.sh" 
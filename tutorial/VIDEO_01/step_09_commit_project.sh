#!/bin/bash

# Source the typing function
source "$(dirname "$0")/../helpers/type_command.sh"

echo "=== Step 9: Commit the project ==="

cd ../../

# Create a new commit
type_and_execute "git add ."
type_and_execute "git commit -m \"02. Add tailwind css\""

echo "✅ Project committed successfully!"

echo "Done: step_09_commit_project" >> progress.txt
echo "Next: Run './step_10_configure_eslint_prettier.sh'" 
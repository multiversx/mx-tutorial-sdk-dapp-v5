#!/bin/bash

# Function to simulate typing a command and then executing it
type_and_execute() {
    local command="$1"
    local delay="${2:-0.1}"  # Default delay between characters
    local wait_time="${3:-2}"  # Default wait time before execution
    
    # Type the command character by character
    while IFS= read -r -n1 char; do
        if [ -n "$char" ]; then
            echo -n "$char"
            sleep "$delay"
        fi
    done <<< "$command"
    echo ""
    
    # Wait before executing
    sleep "$wait_time"
    
    # Execute the command
    eval "$command"
}

# Export the function so it can be used by other scripts
export -f type_and_execute 
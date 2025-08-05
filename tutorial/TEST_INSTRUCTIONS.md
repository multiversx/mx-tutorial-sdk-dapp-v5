# Tutorial Workflow

## 1. Create the final version of the project

1. Create the final version of the project
2. Split the project into phases (will be videos)
3. Create a folder for each step called VIDEO_NUMBER inside the tutorial folder (E.g. VIDEO_01)
4. Create a VIDEO_NUMBER_README.md in each folder (E.g. VIDEO_01_README.md)
5. Ask agent to create a .sh file for each step of the video (E.g. step_01_create_project.sh)
6. Create a run.sh main file in each folder that runs all the steps of the video
7. In the tutorial folder create a run_all.sh file that runs all main run.sh files
8. Make symlink cd /Users/tudor/Work/test/ping-pong-tutorial && ln -sf /Users/tudor/Work/test/prompt-template/tutorial tutorial

## 2. Setup filming:

1. Start a Chrome browser with remote debugging enabled
2. Install code-server open it in the terminaland navigate to the local project folder
3. Install the browser instance of code-server as a PWA so URL is hidden when filming
4. Make sure code-server PWA is running when filming

## 3. Filming:

1. Create a global tests folder
2. Replicate the VIDEO_NUMBER folder structure in the tests folder
3. In each folder create a main video file (Eg. video01.spec.ts)
4. For each sh file ask agent to create a playwright step file (Eg. step_01_create_project.ts)
5. Include the steps files in the main video file
6. At the beginning of the main video file, use `playwright-video` to record the video and stop it at the end of the video
7. Before each step that edits files, create a git commit to be able to compare the changes. Start commit messages with numbers 01, 02, 03, etc.
8. At the end of each main video, use `videogit` to create a video of the changes for specific files:
`videogit $(git log --grep="^01" --pretty=format:"%h" -n1) $(git log --grep="^02" --pretty=format:"%h" -n 1) -w 180 -r 24 -f tailwind.config.js --show-line-numbers --title "tailwind.config.js" --output-filename 01 -o /Users/tudor/Work/test/playwright-mcp/videos/VIDEO_01`
Explenation:
    - $(git log --grep="^01" --pretty=format:"%h" -n1) is the first commit message that starts with 01
    - $(git log --grep="^02" --pretty=format:"%h" -n 1) is the last commit message that starts with 02
    - -w 180 is the words per minute
    - -r 24 is the frame rate
    - -f tailwind.config.js is the file to be included in the video
    - --show-line-numbers is to show the line numbers
    - --title "tailwind.config.js" is the breadcrumb display inside the video for the specific file

NOTE: you can run the edit files videos at the end since commits remain unchanged

9. Run the main test with `chromium.connectOverCDP("http://127.0.0.1:9222")`


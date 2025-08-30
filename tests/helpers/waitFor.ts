import { canProgress } from "../../utils/progress-helper";

export const waitFor = (ms: number) => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const checkInterval = 100; // Check every 100ms
    let totalPausedTime = 0;
    let lastPauseStartTime: number | null = null;

    const checkAndWait = async () => {
      const currentTime = Date.now();
      const canProceed = await canProgress();

      if (!canProceed) {
        // We are paused
        if (lastPauseStartTime === null) {
          // Just started pausing
          lastPauseStartTime = currentTime;
        }
        // Continue checking while paused
        setTimeout(checkAndWait, checkInterval);
        return;
      }

      // We can proceed
      if (lastPauseStartTime !== null) {
        // We just resumed from a pause
        totalPausedTime += currentTime - lastPauseStartTime;
        lastPauseStartTime = null;
      }

      // Calculate elapsed time excluding paused time
      const elapsedActiveTime = currentTime - startTime - totalPausedTime;

      // If the specified active time has passed, resolve
      if (elapsedActiveTime >= ms) {
        resolve("Done waiting!");
        return;
      }

      // Continue checking
      setTimeout(checkAndWait, checkInterval);
    };

    // Start the checking process
    checkAndWait();
  });
};

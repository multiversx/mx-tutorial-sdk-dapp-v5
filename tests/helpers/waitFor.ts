import { canProgress } from "../../utils/progress-helper";

export const waitFor = (ms: number) => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const checkInterval = 100; // Check every 100ms

    const checkAndWait = async () => {
      const elapsed = Date.now() - startTime;

      // If the specified time has passed, resolve regardless of pause state
      if (elapsed >= ms) {
        resolve("Done waiting!");
        return;
      }

      // Check if we can progress
      const canProceed = await canProgress();

      if (canProceed) {
        // If we can progress, wait for the remaining time and resolve
        const remaining = ms - elapsed;
        setTimeout(() => {
          resolve("Done waiting!");
        }, remaining);
      } else {
        // If paused, check again after the interval
        setTimeout(checkAndWait, checkInterval);
      }
    };

    // Start the checking process
    checkAndWait();
  });
};

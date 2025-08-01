export const waitFor = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, ms);
  });
};

// Simulate network delay
export const simulateNetworkDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Wrapper for fetch with throttling
export const throttleFetch = async (
  url: string,
  options: RequestInit = {},
  delay: number = 0
) => {
  if (delay > 0) {
    await simulateNetworkDelay(delay);
  }
  return fetch(url, options);
};

export function debounce<F extends (...args: any[]) => void>(fn: F, delay = 50): F {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  }) as F;
}
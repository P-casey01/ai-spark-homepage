// src/lib/memoryMonitor.ts
export function startMemoryMonitor() {
  function measurementInterval() {
    const MEAN_INTERVAL_IN_MS = 5 * 60 * 1000; // 5 minutes
    return -Math.log(Math.random()) * MEAN_INTERVAL_IN_MS;
  }

  async function performMeasurement() {
    if (!window.crossOriginIsolated) {
      console.log('performance.measureUserAgentSpecificMemory() is only available in cross-origin-isolated pages');
      return;
    }
    if (!performance.measureUserAgentSpecificMemory) {
      console.log('performance.measureUserAgentSpecificMemory() is not available in this browser');
      return;
    }
    try {
      const result = await performance.measureUserAgentSpecificMemory();
      // You can send this result to your server for analysis
      console.log('Memory usage:', result);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'SecurityError') {
        console.log('The context is not secure.');
        return;
      }
      throw error;
    }
    scheduleMeasurement();
  }

  function scheduleMeasurement() {
    const interval = measurementInterval();
    setTimeout(performMeasurement, interval);
  }

  scheduleMeasurement();
}

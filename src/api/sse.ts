/* eslint-disable @typescript-eslint/no-explicit-any */

export const subscribeToSSE = (
    url: string,
    onMessage: (data: any) => void,
    onError?: () => void
  ) => {
    const eventSource = new EventSource(url, { withCredentials: true });
  
    eventSource.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        onMessage(parsed);
      } catch {
        console.error("Failed to parse SSE data:", event.data);
      }
    };
  
    eventSource.onerror = () => {
      eventSource.close();
      onError?.();
    };
  
    return eventSource;
  };
  
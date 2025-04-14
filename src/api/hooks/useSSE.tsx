/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useSSE.ts
import { useEffect, useRef } from "react";
import { subscribeToSSE } from "../sse";

export const useSSE = (
  url: string,
  onMessage: (data: any) => void,
  onError?: () => void
) => {
  const eventRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const sse = subscribeToSSE(url, onMessage, onError);
    eventRef.current = sse;

    return () => {
      sse.close();
    };
  }, [url, onMessage, onError]);
};


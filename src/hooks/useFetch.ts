import { useState, useRef, useCallback } from 'react';

export default function useFetch() {
  const [result, setResult] = useState<any>();

  const execute = useCallback(async (url: string, options: RequestInit) => {
    console.log('FETCHING...');
    const response = await fetch(url, options);
    const jsonResult = await response.json();
    setResult(jsonResult);
  }, []);

  return [execute, result] as const;
}

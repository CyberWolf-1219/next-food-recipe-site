import { useState, useRef, useCallback } from 'react';

export default function useFetch() {
  const execute = useCallback(async (url: string, options: RequestInit) => {
    console.log('FETCHING...');
    const response = await fetch(url, options);
    const jsonResult = await response.json();
    return jsonResult;
  }, []);

  return execute;
}

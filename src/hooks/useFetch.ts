import { Recipe } from '@/Types/RecipeApiTypes';
import { useState, useEffect } from 'react';

export default function useFetch(url: string, options: RequestInit) {
  const [result, setResult] = useState<Array<Recipe>>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, options);
        const jsonObject = await response.json();
        console.log(jsonObject);
        setResult(jsonObject);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return result;
}

export default async function CustomeFetch(url: string, options: RequestInit) {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

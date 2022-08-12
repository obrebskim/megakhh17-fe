export default async function fetchData<T>(link: string): Promise<T> {
  const resp = await fetch(link);
  const data = await resp.json();
  return data;
}

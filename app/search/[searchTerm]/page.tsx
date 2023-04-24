const search = async (searchTerm: string) => {
  const data: SearchResult = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  ).then((res) => res.json());
  // throw new Error('Error from the void');
  return data;
};
export default async function SearchResult({
  params: { searchTerm },
}: SearchPageProps) {
  const searchResult = await search(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResult.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

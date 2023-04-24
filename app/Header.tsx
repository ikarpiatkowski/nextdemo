import Link from 'next/link';

export default function Home() {
  return (
    <header className="space-x-4 p-5 bg-indigo-500">
      <Link
        href="/"
        className="px-2 py-1 bg-indigo-200 text-indigo-500 font-bold rounded-lg"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-indigo-200 text-indigo-500 font-bold rounded-lg"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-indigo-200 text-indigo-500 font-bold rounded-lg"
      >
        Search
      </Link>
    </header>
  );
}

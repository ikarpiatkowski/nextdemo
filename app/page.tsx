import { Suspense } from 'react';
import TodosList from './todos/TodosList';
export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <div className="flex space-x-2 text-red-500">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
      <Suspense
        fallback={<p className="text-blue-500">Loading the Todos 2...</p>}
      >
        <div className="flex space-x-2 text-blue-500">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}

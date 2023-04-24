import { notFound } from 'next/navigation';
export const dynamicParams = true;
const fetchTodo = async (todoId: string) => {
  const todo: Todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());
  // console.log(todo);
  return todo;
};
export default async function TodoPage({ params: { todoId } }: TodoPageProps) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-indigo-500 m-2 shadow-lg">
      <p>#{todo.id}</p>
      <p>{todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By user {todo.userId}
      </p>
    </div>
  );
}
export async function generateStaticParams() {
  const todos: Todo[] = await fetch(
    'https://jsonplaceholder.typicode.com/todos/'
  ).then((res) => res.json());
  const trimmedTodos = todos.splice(0, 10);
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

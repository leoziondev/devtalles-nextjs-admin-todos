import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import TodosGrid from "@/todos/components/TodosGrid";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
 title: 'Todos List',
 description: 'SEO Title',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <>
      <span className="text-3xl font-bold mb-10 block">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  )
}

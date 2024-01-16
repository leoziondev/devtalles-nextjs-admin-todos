import prisma from "@/lib/prisma";
import TodosGrid from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
   // TODO: Form add todo
    <TodosGrid todos={todos} />
  )
}

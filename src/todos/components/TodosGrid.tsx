'use client'

import { Todo } from "@prisma/client"
import { TodoItem } from ".."

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <div className="grid sm:grid-cols-3 gap-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodosGrid

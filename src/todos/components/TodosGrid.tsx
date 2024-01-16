'use client'

import { useRouter } from "next/navigation"

import { Todo } from "@prisma/client"
import * as todosApi from "../helpers/todos"

import { TodoItem } from ".."

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {
    const router = useRouter()

    const toggleTodo = async (id: string, complete: boolean) => {
        const updatedTodo = await todosApi.updateTodo(id, complete)

        router.refresh()
    }

    return (
        <div className="grid sm:grid-cols-3 gap-2">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    )
}

export default TodosGrid

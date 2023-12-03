import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    await prisma.todo.deleteMany() // delete * from todo

    await prisma.todo.createMany({
        data: [
            { description: 'Learn NextJS 14 Essentials', complete: true },
            { description: 'Learn Prisma'},
            { description: 'Learn PostegreSQL'},
            { description: 'Learn NextJS 14 Intermediate'},
            { description: 'Learn NextJS 14 Advanced'},
        ]
    })

    return NextResponse.json({ message: 'Seed Executed' })
}
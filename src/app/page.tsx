import Link from "next/link";
import {prisma} from "@/db";
import {TodoItems} from "@/components/TodoItems";

export default async function Home() {

  const todo = await prisma.todo.findMany()
    return (
        <>
        <header className="flex justify-between items-center mb-4 items-center">
            <h1 className="text-2xl">
                Todo
            </h1>
            <Link
                className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700
                focus-within:bg-slate-700 outline-none"
                href="/new">
                New
            </Link>
        </header>
        <ul className="pl-4">
            {todo.map(todo => (
                <TodoItems key={todo.id} {...todo} />
            ))}
        </ul>
        </>
    )
}
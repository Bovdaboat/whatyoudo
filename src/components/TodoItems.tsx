import React from "react";

type TodoItemsProps {
id: string
title: string
complete: boolean()
}

export function TodoItems ({ id, title , complete}: TodoItemsProps) {
    return <li className="flex gap-1 items-center">
            <input id={id} type={"checkbox"}/>
            <label htmlFor={id}
    </li>
}
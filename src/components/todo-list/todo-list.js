import React from "react";

import ToDOListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const ToDOList = ( { todos, onDelete, onToggleImportant, onToggleDone } ) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id}>
                < ToDOListItem
                onDelete = {() => onDelete(id)}
                onToggleImportant = {() => onToggleImportant(id)}
                onToggleDone = {() => onToggleDone(id)}
                {...itemProps} />
            </li>
        )
    });
    return (
        <ul className="ul_order">
            {elements}
        </ul>
    )
};

export default ToDOList;
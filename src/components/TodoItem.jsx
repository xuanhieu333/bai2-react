import React, { useEffect, useState } from 'react'
import moment from "moment"
const TodoItem = (props) => {
    const { todo, deleteTodo } = props;

    return (
        <div className="todo-item" style={{ backgroundColor: todo.background }}>
            <div className="todoitem__parents">
                <div className="todo-item__content">
                    <p>{todo.content}</p>
                </div>
                <div className="todo-item__status">
                    <p>{todo.status}</p>
                </div>
            </div>
            <button className="todo-item__btn" onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem


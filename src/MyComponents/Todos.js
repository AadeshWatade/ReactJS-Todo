import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let flowStyle = {
        maxHeight: "50vh",
        overflowY:"scroll"
    }
    let todo123 = {
        position: "sticky"
    }
    return (
        <div className="container" style={flowStyle}>
            <h3 className="text-center my-3" style={todo123}>Todo's List</h3>
            {props.todos.length===0?"No Todos To Display":
            props.todos.map((todo)=>{
                console.log(todo.sno)
                return (
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })
            }
        </div>
    )
}

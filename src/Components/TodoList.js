import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import {Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const TodoList = () => {
    const [doneFiltre, setDoneFiltre] = useState(false)
    const list = useSelector(state => state.todo.todolist)
    console.log(list)
    


    return (
        <div>
            <Form>
                <Form.Select onChange={(e)=>setDoneFiltre(e.target.value)}>
                    <option value={true}>Done</option>
                    <option value={false}>Not Done</option>
                </Form.Select>
            </Form>

            {list.filter(el=>el.isDone==doneFiltre).map(item=>(
                <Link to={`/${item.id}`}>
                <TodoItem item={item} /></Link>
            ))}
        </div>
    )
}

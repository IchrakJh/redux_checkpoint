import React , { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch } from 'react-redux'
import { EditTodo } from '../redux/Slices/ToDoSlice'

const EditTodoo = () => {
    const dispatch = useDispatch()
    const params=useParams()
    let Uid = params.id
    const list = useSelector(state => state.todo.todolist)
    let item= list.find((el)=>el.id == Uid)
    
    const [newDescription, setNewDescription] = useState("")
    const handelEdit=()=>{
        dispatch(EditTodo({id:Uid, description:newDescription}))

    }
    return (
        <div>
            <Form>
                <Form.Control type='text'  disabled></Form.Control>
                <Form.Control type='text'  onChange={(e)=>setNewDescription(e.target.value)} ></Form.Control>
                <Button onClick={()=>handelEdit()}>Edit</Button>
            </Form>
        </div>
    )
}

export default EditTodoo


import React,{useState} from 'react'
import { Container, Form, Alert, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { AddTodo } from '../redux/Slices/ToDoSlice'

const NewTodo = () => {
    const dispatch = useDispatch()
    const [newItem,setNewItem] = useState({
        id:Math.random(),
        title:"",
       description:"",
       isDone:false
     })

     const handleAdd =()=>{
        dispatch(AddTodo(newItem))
     }

    return (
        <div>
            <Container>
                <h3>Add New Todo</h3>
                <Alert></Alert>
            <Form>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={(e)=>setNewItem({...newItem, title:e.target.value})}/>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" onChange={(e)=>setNewItem({...newItem, description:e.target.value})}/>

            </Form>
            <Button onClick={handleAdd}>Add</Button>
            </Container>
        </div>
    )
}

export default NewTodo

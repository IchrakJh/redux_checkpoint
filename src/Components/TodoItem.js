
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { DeleteTodo, DoneTodo } from '../redux/Slices/ToDoSlice'


const TodoItem = ({item}) => {
    const dispatch = useDispatch()

    const handelDone=()=>{
        dispatch(DoneTodo({id:item.id}))
    }

    const handelDelet=()=>{
        dispatch(DeleteTodo({id:item.id}))
    }
    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title style={{color:'pink'}}>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <h6 style={{color:item.isDone?"green":"red"}}>{item.isDone?"Done":"Not Done"}</h6>
                </Card.Body>
                
            </Card>
            <Button onClick={()=>handelDelet()} variant="danger" >Delet</Button>
            <Button onClick={()=>handelDone()} variant="success" >Toggle</Button>

        </div>
    )
}

export default TodoItem

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  todolist:[
      {id:Math.random(),
       title:"title 1",
      description:"description 1",
      isDone:false
    },{id:Math.random(),
        title:"title 2",
       description:"description 2",
       isDone:false
     },{id:Math.random(),
        title:"title 3",
       description:"description 3",
       isDone:false
     },{id:Math.random(),
        title:"title 4",
       description:"description 4",
       isDone:false
     },
  ]
}

export const TodoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todolist.push(action.payload)
    },
    DeleteTodo:(state,action)=>{
      state.todolist=state.todolist.filter(el=>el.id!==action.payload.id)
    },
    DoneTodo:(state,action)=>{
      let i =state.todolist.findIndex(el=>el.id==action.payload.id)
      state.todolist[i]={...state.todolist[i], isDone:!state.todolist[i].isDone}
     
    },
    EditTodo:(state,action)=>{
      let i =state.todolist.findIndex(el=>el.id==action.payload.id)
      state.todolist[i]={...state.todolist[i], description:action.payload.description}
    }
  },
})

// Action creators are generated for each case reducer function
export const {AddTodo,DeleteTodo, DoneTodo,EditTodo } = TodoSlice.actions

export default TodoSlice.reducer
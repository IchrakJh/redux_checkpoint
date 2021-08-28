import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './Slices/ToDoSlice'

export const store = configureStore({
  reducer: {
    todo:TodoSlice
      
  },
})
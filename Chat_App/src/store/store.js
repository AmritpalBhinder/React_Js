import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/userSlice'
import chatReducer from './slices/chatSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    chat: chatReducer
  }
})

export default store
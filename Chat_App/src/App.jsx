import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from "./components/auth/auth"
import ChatLayout from './components/ChatLayout/ChatLayout'

function App() {
  const { user, loading } = useAuthState()
  if(loading) return <div className="center">Loading...</div>
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path='/' element={user ? <ChatLayout /> : <Navigate to="/auth" />} />
    </Routes>
  )
}

export default App

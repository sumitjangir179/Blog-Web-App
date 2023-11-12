import { React, useEffect, useState } from 'react'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/features/authSlice'
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'
import './App.css'

function App  () {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.currentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }
      else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, [])

  return !loading ?
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    : null
}

export default App
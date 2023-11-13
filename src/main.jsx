import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddPost, AllPost, EditPost, Home, Login, SignUp, Post } from './pages/index.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import { AuthLayout } from './components/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <AuthLayout authentication={false} ><Login /></AuthLayout> },
      { path: '/signup', element: <AuthLayout authentication={false}><SignUp /></AuthLayout> },
      { path: '/all-posts', element: <AuthLayout authentication><AllPost /></AuthLayout> },
      { path: '/add-post', element: <AuthLayout authentication><AddPost /></AuthLayout> },
      { path: '/edit-post/:slug', element: <AuthLayout authentication><EditPost /> </AuthLayout> },
      { path: '/post/:slug', element: <Post /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}><App /> </RouterProvider>
    </Provider>
  </React.StrictMode>,
)

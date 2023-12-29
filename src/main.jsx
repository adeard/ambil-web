import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
  },
  // {
  //   path:"/login",
  //   element:<LoginPage></LoginPage>
  // },
  // {
  //   path:"/register",
  //   element:<RegisterPage></RegisterPage>
  // },
  // {
  //   path:"/product/:id",
  //   element:<DetailProductPage></DetailProductPage>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router}/>
    </Provider>    
  </React.StrictMode>,
)


import React from 'react'
import Login from './Login'
import Browes from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browes/>
        }
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

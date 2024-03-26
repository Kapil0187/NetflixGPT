import React from 'react'
import Login from './Login'
import Browes from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import GptSearchPage from './GptSearchPage'
import Footer from './Footer'
import MovieDetails from './MovieDetails'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browes/>,
            children:[
              {
                path:"/browse",
                element:<>
                  <MainContainer/>
                  <SecondryContainer/>
                </>
              },
              {
                path:"/browse/gptSearch",
                element:<GptSearchPage/>
              },
              {
                path:"/browse/movie",
                element:<MovieDetails/>
              }
            ]           
        },
    ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

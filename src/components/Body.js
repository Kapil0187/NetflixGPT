import React from 'react'
import Login from './Login'
import Browes from './Browse'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import GptSearchPage from './GptSearchPage'
import Footer from './Footer'
import MovieDetails from './MovieDetails'
import ExploreMovies from './ExploreMovies'

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
                path:"/browse/moviedetails",
                element:<MovieDetails/>
              },
              {
                path:"/browse/Movies",
                element:<ExploreMovies/>
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

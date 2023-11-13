import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
import CreatePost from './CreatePost'
import AllPost from './AllPost'
import UpdatePost from './UpdatePost'
import IndivudalPost from './IndividualPost'

let route=createBrowserRouter([{

    element:<Home/>,
    path:"/",
    children:[{
        element: <CreatePost/>,
        index:true,
    },
    {
        element: <AllPost/>,
     path: "/allpost"
    },
    {
            element: <UpdatePost/>,
            path:"/updatepost/:id"
    },
    {
        element: <IndivudalPost/>,
        path: "/indivudalpost/:id"
    }
]
}])

const App = () => {
  return (
    <div>
    <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App

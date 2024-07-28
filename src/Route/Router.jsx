import {    createBrowserRouter,    } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/project',
        element: <Projects></Projects>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }

    ]
  }
])

export default router;
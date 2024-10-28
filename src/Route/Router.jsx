import {    createBrowserRouter,    } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Projects from "../Pages/Projects/Projects";
import About from "../Pages/About/About";
import ContactPage from "../Pages/ContactPage/ContactPage";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
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
        element:<ContactPage></ContactPage>
      }

    ]
  }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Blog from "../pages/Blog";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
       
      
      ],
    },
  
  ]);

export default routes;
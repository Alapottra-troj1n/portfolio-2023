import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Journal from "../pages/Journal";



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
          path: "journal",
          element: <Journal />,
        },
       
      
      ],
    },
  
  ]);

export default routes;
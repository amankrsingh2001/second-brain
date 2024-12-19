import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/Home";
import { AddContent } from "../page/AddContent";





const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
        ]
    },
    {
        path:'/addContent',
        element:<AddContent/>
    }
])


export {router}
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/Home";
import { AddContent } from "../page/AddContent";
import { Signup } from "@/page/Signup";





const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Signup/>,
            },
        ]
    },
    {
        path:'/dashboard',
        element:<Home/>
    }
])


export {router}
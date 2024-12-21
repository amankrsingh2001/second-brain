import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../page/Home";
import { Signup } from "@/page/Signup";
import { Signin } from '../page/SignIn';






const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                
                path:'/signup',
                element:<Signup/>,
            },
            {
                path:'/signin',
                element:<Signin/>
            },
            {
                path:'/dashboard',
                element:<Home/>
            }
        ]
    },
   
])


export {router}
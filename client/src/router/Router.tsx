import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Signup } from "../page/Signup";
import { Signin } from "../page/SignIn";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/signin',
        element:<Signin/>
    }
])


export {router}
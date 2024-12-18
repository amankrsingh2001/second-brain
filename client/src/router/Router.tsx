import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Signup } from "../page/Signup";
import { Signin } from "../page/SignIn";
import { Home } from "../page/Home";





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
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'/signin',
        element:<Signin/>
    }
])


export {router}
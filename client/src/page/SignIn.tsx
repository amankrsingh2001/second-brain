import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios"
import { BASE_URL } from "@/utils/Type"
import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { tokenState } from "@/atoms/tokenAtom"





export const Signin = () =>{

const setToken = useSetRecoilState(tokenState)

    const navigate = useNavigate()  

       const [data, setData] = useState({
            username:"",
            password:""
        })
        
    

        const submitHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            const signIn = await axios.post(BASE_URL+'user/login', data);
            const token = signIn?.data?.data.token
            setToken(token);
            localStorage.setItem("token", token)
            if(signIn?.data?.success) navigate('/dashboard')
        }
        
    
        const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
            setData({...data, [e.target.name]:e.target.value})
        }
    
    return <div className="flex w-full min-h-screen justify-center items-center">
                
                    <form className="py-4 flex flex-col rounded-md px-6 w-[22%] shadow-2xl gap-4" onSubmit={(e)=>submitHandler(e)}>
        
                        <Input placeholder="Username" label={"Username"} type="text" name="username" onChange={onChangeHandler}/> 
        
                        <Input placeholder="Password" label={"Password"} type="password" name="password" onChange={onChangeHandler}/>      
        
                        <div className="mt-3">
                        <Button variant="primary" text={"SignIn"} animation="mainShadow" type="submit"></Button>
        
                        </div>
                    </form>
    </div>
}
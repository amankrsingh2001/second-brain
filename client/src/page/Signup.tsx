import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { CloseIcon } from "../components/icons/CloseIcons";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { BASE_URL } from "@/utils/Type";
import { useNavigate } from "react-router-dom";


interface CloseIcon {
    onClick?:()=>void
}

export const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        fullName:"",
        username:"",
        password:""
    })

    const submitHandler =  async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const signUp = await axios.post(BASE_URL+ "user/signup",data)
        if(signUp.data.success) navigate('/signin')
            

    }


    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setData({...data, [e.target.name]:e.target.value})
    }







  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col">
        

            <form className="py-4 flex flex-col rounded-md px-6 w-[22%] shadow-2xl gap-4" onSubmit={(e)=>submitHandler(e)}>

                <Input placeholder="First Name" label={"Full Name"} type="text" name="fullName" onChange={onChangeHandler}/> 

                <Input placeholder="Username" label={"Username"} type="text" name="username" onChange={onChangeHandler}/> 

                <Input placeholder="Password" label={"Password"} type="password" name="password" onChange={onChangeHandler}/>      

                <div className="mt-3">
                <Button variant="primary" text={"Signup"} animation="mainShadow" type="submit"></Button>

                </div>
            </form>
    </div>
  );
};

import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";


export const Signup = () => {
    const [data, setData] = useState({
        fullName:"",
        username:"",
        password:""
    })

    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
            console.log(data)
    }


    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setData({...data, [e.target.name]:e.target.value})
    }

  return (
    <div className="flex w-full min-h-screen justify-center border-2 border-pink-500 items-center">
            <form className="py-4 flex flex-col rounded-md px-6 w-[22%] shadow-2xl gap-4" onSubmit={(e)=>submitHandler(e)}>

                <Input placeholder="First Name" label={"First Name"} type="text" name="fullName" onChange={onChangeHandler}/> 

                <Input placeholder="Username" label={"Username"} type="text" name="username" onChange={onChangeHandler}/> 

                <Input placeholder="Password" label={"Password"} type="password" name="password" onChange={onChangeHandler}/>      

                <div className="mt-3">
                <Button variant="primary" text={"Signup"} animation="mainShadow" type="submit"></Button>

                </div>
            </form>
    </div>
  );
};

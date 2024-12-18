import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { IoClose } from "react-icons/io5"

interface Signin {
    onClick:()=>void
}


export const Signin = ({onClick}:Signin) =>{


       const [data, setData] = useState({
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
    
    return <div className="flex w-full min-h-screen justify-center items-center">
                      <button onClick={onClick} className="w-full items-end flex justify-end text-4xl absolute top-5 pr-4 ">
                               <IoClose/>
                           </button>
                    <form className="py-4 flex flex-col rounded-md px-6 w-[22%] shadow-2xl gap-4" onSubmit={(e)=>submitHandler(e)}>
        
                        <Input placeholder="Username" label={"Username"} type="text" name="username" onChange={onChangeHandler}/> 
        
                        <Input placeholder="Password" label={"Password"} type="password" name="password" onChange={onChangeHandler}/>      
        
                        <div className="mt-3">
                        <Button variant="primary" text={"SignIn"} animation="mainShadow" type="submit"></Button>
        
                        </div>
                    </form>
    </div>
}
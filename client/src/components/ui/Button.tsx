import { ReactElement } from "react";


interface buttonProps {
    variant:"primary" | "secondary";
    text:string;
    animation?:"mainShadow";
    startIcon?:ReactElement
    endIcon?:ReactElement
}

const variantClasses = {
    "primary":"text-black bg-white border-[2px] border-zinc-900 ",
    "secondary":"text-black bg-white border-[2px] border-zinc-900 "
}

const animationClasses = {
    "mainShadow":"bg-black text-white border-purple-500",
    "slidingShadow":"bg-red-500",
}


export const Button= ({variant, text, animation}:buttonProps)=>{
  

    return (
        <div className={`${variantClasses[variant]} ${animation?`${animationClasses[animation]}`:""}`}>
            {text}
        </div>
    )
}
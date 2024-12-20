import { ReactElement } from "react";

interface buttonProps {
  variant: "primary" | "secondary" | "tertiary";
  text: string;
  animation?: "mainShadow";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  type?:"submit"
  onClick?:()=>void

}

const variantClasses = {
  primary:
    "text-black bg-white border-[1px] border-zinc-500 w-fit px-2 rounded-md w-full text-center px-2 py-1",
  secondary: "text-black bg-[#7069BD] w-fit  shadow-xl rounded-md w-fit text-white  text-center px-2 py-2",
  tertiary: "text-black bg-[#DADEF2] shadow-lg w-fit rounded-md w-fit text-black text-center px-3 py-2",
};

const animationClasses = {
  mainShadow: " border-purple-500",
  slidingShadow: "bg-red-500",
};

export const Button = ({ variant, text, animation, type, startIcon, onClick }: buttonProps) => {

  return (
    <>
      {animation ? (
        <div
          className={`relative w-full border-[1px] border-slate-600 rounded-md group  flex flex-col text-center`}
        >
          <div className="relative group overflow-hidden ">
            <div className="absolute py-2 rounded-sm bg-gray-800 w-full h-full translate-x-full group-hover:translate-x-0  transition duration-500 ease-in-expo group-hover:text-white"></div>
            <button onClick={onClick} className="relative py-2 z-10 w-full outline-black outline-rounded-md group-hover:text-white transition delay-100 ">
              {text}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
  
            <button onClick={onClick} type={type} className={`${variantClasses[variant]} flex gap-2  items-center`}  >{startIcon}{text}</button>
        </div>
      )}
    </>
  );
};

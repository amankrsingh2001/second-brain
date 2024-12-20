import {  Field, Input, Label } from "@headlessui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import clsx from "clsx";
import { useState } from "react";
import { Types } from "@/utils/Type";

export const AddContent = () => {
  const [select, setSelect] = useState("")
  const [newVal, setNewVal] = useState({
    title: "",
    description:'',
    link:'',
    type:''
  });

  const onChangeInputHandler = (e: any) => {
    setNewVal({ ...newVal, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e:any) =>{
        e.preventDefault()
        let comValue = {...newVal, select}
        console.log(comValue)
       
  }

  const onSelectChange = (e:string) =>{
      setSelect(e)
  }


  return (
    <div className="w-screen h-screen flex justify-center  items-center">
      <div className="w-full px-4 flex justify-center items-center ">
        <form className="flex flex-col gap-3 bg-custom-gradient shadow-lg rounded-md w-[30%] px-12 py-8 max-w-xl" onSubmit={onSubmitHandler}>
          <h1 className="text-white text-xl mb-4 font-mono">Enter content details</h1>
          <div>
          
        <Field >
          <Label className="text-sm/6 font-medium text-white">Title</Label>

          <Input
          name="title"
           onChange={onChangeInputHandler}
          placeholder="Title"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>

        </div>

        <div>


        <Field>
          <Label className="text-sm/6 font-medium text-white">Description</Label>

          <Input
           name="description"
          onChange={onChangeInputHandler}
          placeholder="Description"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>

        </div>

        <div>

        <Field>
          <Label className="text-sm/6 font-medium text-white">Link</Label>

          <Input
          name="link"
          onChange={onChangeInputHandler}
          placeholder="Link"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        </div>

        <div className='text-white py-4'>
            <label className="relative bottom-3 text-sm font-light">Type</label>
        <Select onValueChange={onSelectChange} >
         
              <SelectTrigger   className="w-full">
                <SelectValue placeholder="Type" />
                
              </SelectTrigger>
              <SelectContent >
              {
                Types.map((type)=>
                  <SelectItem  value={type}>{type}</SelectItem>
                )
              }
              
              </SelectContent>
            </Select>

        </div>
        <button type="submit" className=" outline-none text-md rounded-md text-[#c7cdd4] bg-white/20 px-4 py-2 ">Add Content Details</button>

        </form>
      </div>
    </div>
  );
};

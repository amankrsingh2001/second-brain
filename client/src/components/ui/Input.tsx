interface Inputval {
    label:string
    type:string
    placeholder:string
    name:string
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void

}





export const Input = ({onChange, label, placeholder, type, name}:Inputval) =>{
    return  <div className="flex flex-col gap-2">
    <label className="text-medium font-sans font-medium">{label}</label>
    <input onChange={onChange} name={name} type={type} placeholder={placeholder} className="border-[1px] border-gray-700 w-full rounded-md px-2 py-2 outline-none"/>
</div>    
}



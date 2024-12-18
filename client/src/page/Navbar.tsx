import { Button } from "../components/ui/Button"

export const Navbar = () =>{
    return <div className="w-full bg-[#DADEF2] flex items-end justify-end">
        <div className="p-4 flex gap-4 items-end">
            <Button variant="primary" text={"signup"}/>
            <Button variant="primary" text={"signin"}/>
        </div>
    </div>
}
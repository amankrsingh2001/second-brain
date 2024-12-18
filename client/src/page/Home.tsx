import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card"
import { Sidebar } from '../utils/SidebarData';
import { Button } from "../components/ui/Button";
import { ShareIcon } from "../components/icons/ShareIcon";
import { AddIcon } from "../components/icons/Add";

export const Home = () =>{
    const navigate = useNavigate()



    return <div className="flex w-screen justify-between h-full ">
        
        <div className="w-[18%] bg-[#DADET1]">
                <h1 className="text-2xl font-mono pt-4 text-center">Second Brain</h1>
                <div className=" py-4 px-8 ">
                    <ul className="flex flex-col gap-3">
                        {
                            Sidebar.map((it, index)=>{
                                return <li onClick={()=>{
                                    console.log(it.li)
                                    navigate(it.li)}} className=" cursor-pointer flex items-center gap-2 py-2 px-3 border-[1px] border-slate-800 rounded-2xl" key={index} >{it.icon}{" "}{it.li}</li>
                            })
                        }
                </ul>
                    
                </div>
        </div>

                        
        <div className="w-full flex flex-col shadow-lg p-8 gap-6">
                        <div className="w-full py-4  gap-4  flex justify-end items-end">
                                <Button variant="tertiary" text="Share Brain" startIcon={<ShareIcon/>}/>
                                <Button variant="secondary" text="Add Content" startIcon={<AddIcon/>}/>
                        </div>

                        <Card youTubelink="https://youtu.be/z41Humc6hMY?si=hlSrpRGmUBW-kZlF" tweetLink="https://x.com/itz_mohit_014/status/1863835150741618782"/>
        </div>
    </div>
}


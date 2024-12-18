import { NotesIcon } from "../icons/NotesIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { TrashIcon } from "../icons/TrashIcon"

interface cardVals{
    youTubelink?:string
    tweetLink?:string
}


export const Card = ({youTubelink, tweetLink}:cardVals) =>{
    return <div className="flex flex-col items-start rounded-lg border-t-[1px] border-gray-300 p-4 shadow-xl w-[24%] gap-2">
        <div className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
            <NotesIcon/>
                <p className="text-sm">Notes value</p>
            </div>
            <div className="flex gap-2">
                <ShareIcon/>
                <TrashIcon/>
            </div>

        </div>
        <div>

        </div>


        <div className="flex flex-col w-full gap-2">
             <h1 className="text-xl font-light font-serif">Title</h1>
               <p className="text-md font-serif">Description of the card will be added here </p>
               {
                    youTubelink && <div className="w-full flex items-center justify-center">
                    <iframe width="390" height="180" src={youTubelink.replace('youtu.be','www.youtube.com/embed')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                     </div>
               }
              
            {
                tweetLink &&  <div className="w-full flex items-center justify-center">
            
                <blockquote className="twitter-tweet">
                       <a href={tweetLink.replace("x.com","twitter.com")}></a> 
                    </blockquote>
    
                </div>
               }
           


        </div>
            
    </div>

}
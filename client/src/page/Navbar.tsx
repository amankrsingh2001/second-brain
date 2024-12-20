
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";



export const Navbar = () => {
const navigate = useNavigate()



const signUpButtonClickhandler = () =>{
  navigate('/signup')
}

const signInButtonClickHandler = ()=>{
  navigate('/signIn')
}

  return (
    <div className="w-full flex-col bg-custom-gradient shadow-md flex items-end justify-end">
      <div className="p-4 flex gap-4 items-end">
        <Button onClick={signUpButtonClickhandler} variant="tertiary" text={"signup"} />
        <Button
        onClick={signInButtonClickHandler}
          variant="tertiary"
          text={"signin"}
        />
      </div>
    </div>
  );
};

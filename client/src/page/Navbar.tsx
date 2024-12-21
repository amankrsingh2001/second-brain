
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "@/atoms/tokenAtom";



export const Navbar = () => {
const navigate = useNavigate()
const [token, setToken] = useRecoilState(tokenState)





const signUpButtonClickhandler = () =>{
  navigate('/signup')
}

const signInButtonClickHandler = ()=>{
  navigate('/signIn')
}

console.log(token,"After re-render")

const logOutHandler = () =>{
  setToken("");
  localStorage.setItem("token", "");
  navigate('/signin')
}

  return (
    <div className="w-full flex-col bg-custom-gradient shadow-md flex items-end justify-end">
      <div className="p-4 flex gap-4 items-end">
        {
          !token ? (<>
          
          <Button onClick={signUpButtonClickhandler} variant="tertiary" text={"signup"} />
          <Button
          onClick={signInButtonClickHandler}
            variant="tertiary"
            text={"signin"}
          />
          </>
          ): <Button onClick={logOutHandler} variant="tertiary" text={"Logout"} />
        }
      </div>
    </div>
  );
};

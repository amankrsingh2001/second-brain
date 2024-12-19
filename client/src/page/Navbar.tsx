import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Signup } from "./Signup";
import { Signin } from "./SignIn";

export const Navbar = () => {
  const [signupModal, setSignupModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const signUpModalHandler = () => {
    setSignupModal(!signupModal);
  };

  const signInModalHandler = () => {
    setSignInModal(!signInModal);
  };

  return (
    <div className="w-full flex-col bg-[#DADEF2] shadow-md flex items-end justify-end">
      <div className="p-4 flex gap-4 items-end">
        <Button    onClick={signInModalHandler} variant="primary" text={"signup"} />
        <Button
          onClick={signUpModalHandler}
          variant="primary"
          text={"signin"}
        />
      </div>

      {signupModal && (
        <div className="fixed inset-0 z-[1000] bg-opacity-10 backdrop-blur-sm">
          <Signup onClick={signUpModalHandler} />
        </div>
      )}

      {signInModal && (
        <div className="fixed inset-0 z-[1000] bg-opacity-10 backdrop-blur-sm">
          <Signin onClick={signInModalHandler} />
        </div>
      )}
    </div>
  );
};

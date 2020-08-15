import React from "react";

import SignIn from "../../components/SignIn/sign-in.component.";
import SignUp from "../../components/SignUp/sign-up.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

function SignInAndSignUp() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}

export default SignInAndSignUp;

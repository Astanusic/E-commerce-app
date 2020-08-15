import React from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase";

import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";

function SignIn() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(state.email, state.password);
    } catch (err) {
      console.log(err);
    }

    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <SignInContainer>
      <SignInTitle>Sign In</SignInTitle>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={state.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={state.password}
          handleChange={handleChange}
          required
        />

        <ButtonsBarContainer className="buttons">
          <CustomButton type="submit" value="Submit form">
            Sign in
          </CustomButton>
          <CustomButton
            className="blue"
            onClick={signInWithGoogle}
            type="button"
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;

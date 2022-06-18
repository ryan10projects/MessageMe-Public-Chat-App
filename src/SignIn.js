import React from 'react'
import { auth } from './Config'
import { firebase } from './Config'
import 'firebase/auth';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function SignIn() {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  return (
    
    <><center>Check out the Github Repository at <b>https://github.com/ryan10projects/MessageMe</b></center>
    <center><button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button></center>
    
    </>
  )
}

export default SignIn
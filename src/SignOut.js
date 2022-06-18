import React from 'react'
import { auth } from './Config'


function signOut() {
  return auth.currentUser && (
    <button className="sign-out"  onClick={() => auth.signOut()}>Sign out</button>

    )
}

export default signOut
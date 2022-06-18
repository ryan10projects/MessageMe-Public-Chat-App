import React from 'react'
import ChatRoom from './ChatRoom'
import { auth } from './Config';
function ChatMessage(props) {

  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'message-right' : 'message-left';
  return (
    <div className={'message ${messageClass}'}>
    <img src={photoURL} />

    <p>{text}</p>
    </div>
  )
}

export default ChatMessage
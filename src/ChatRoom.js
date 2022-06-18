import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { firestore } from './Config';
import { collection, doc, limitToLast, setDoc } from "firebase/firestore"; 
import { db } from './Config';
import { useState } from 'react';
import { firebase } from './Config';
import { auth } from './Config';
import { useRef } from 'react';
import { async } from '@firebase/util';
import { query, orderBy,limit } from "firebase/firestore"; 
import { addDoc } from 'firebase/firestore/lite';
function ChatRoom() {
    //firebase collection of messages
const dummy = useRef();
  const { uid, photoURL } = auth.currentUser;
   
  const messagesRef = collection(db,'messages');
  // order collection refernce by timestamp
  const q =  query(messagesRef, orderBy("createdAt"), limitToLast(20));
    const [  messages ]= useCollectionData( q, {
        idField: 'id'
    
    });

    const [formValue, setFormValues] = useState('');

    const sendMessage = async(e) =>{
        e.preventDefault();
        const  { uid, photOURL } = auth.currentUser;
        // add 
       var currDate = new Date();

        await addDoc(collection(db, "messages"), {
            text: formValue,
            //get createdAt from firebase
            createdAt: currDate,
        
            uid,
            photoURL,
          });
        setFormValues('');

        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
        <main>
        
            {messages && messages.map(msg => <ChatMessage key ={msg.id} message = {msg }/>)}
            <span ref={dummy}></span>
        </main>

        
         <form onSubmit={sendMessage}>
         <input value={formValue} onChange={(e) => setFormValues(e.target.value)} placeholder="Remember to behave well!"/>
         <button type="submit">Send</button>
         </form>
         </>
        )
  
    

}
export default ChatRoom;








 
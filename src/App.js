import './App.css';

import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import ChatMessage from './ChatMessage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from './Config';
import { auth } from './Config';

const authentication = auth;


function App() {

  const [user] = useAuthState(authentication); 

  return (
    <div className="App">
    
     
    <header>
        <h1 style={{color:"black"}}>MessageMe</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
     
    </div>
  );
}

export default App;

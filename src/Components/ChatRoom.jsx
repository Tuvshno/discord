import ChatMessage from './ChatMessage'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useRef, useState } from 'react';

function ChatRoom(props) {

  const auth = props.auth
  const firebase = props.firebase
  const firestore = props.firestore

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, { idField: 'id' })

  const [formValue, setFormValue] = useState('');

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <div class="profile-nav">
        <p>NAME</p>
        <div class="profile-nav-buttons">
          <button>Call</button>
          <button>Face</button>
          <button>Pin</button>
          <button>Add</button>
          <input></input>
          <button>Inbox</button>
          <button>Question</button>
        </div>
      </div>

      <div class="chat-container">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth} />)}

        <span ref={dummy}></span>

        <form onSubmit={sendMessage}>

          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

          <button type="submit" disabled={!formValue}>Send</button>

        </form>
      </div>
    </div>

  )
}

export default ChatRoom
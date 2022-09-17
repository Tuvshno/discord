import Servers from './Servers'
import Friends from './Friends'
import ChatRoom from './ChatRoom'

function Main(props) {

  const auth = props.auth
  const firebase = props.firebase
  const firestore = props.firestore

  return (
    <div class="main-container">
      <Servers />
      <Friends />
      <ChatRoom auth={auth} firebase={firebase} firestore={firestore}/>
    </div>
  )
}

export default Main
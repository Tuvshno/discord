import Main from './Main'
import SignIn from './SignIn'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'

function App() {

  firebase.initializeApp({
    apiKey: "AIzaSyADjEKXlQHYvbgd-63_KgsgopI_gS5xUt0",
    authDomain: "discord-8dc83.firebaseapp.com",
    projectId: "discord-8dc83",
    storageBucket: "discord-8dc83.appspot.com",
    messagingSenderId: "320908738642",
    appId: "1:320908738642:web:4fcc267879d40600a71f8b",
    measurementId: "G-FXMWMD0LEJ"
  })

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const [user] = useAuthState(auth)

  return (
    <div class="App">
      {user ? <Main auth={auth} firebase={firebase} firestore={firestore} /> :
        <SignIn auth={auth} firebase={firebase} />}
    </div>
  )

}
export default App
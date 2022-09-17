function SignIn(props) {

  const auth = props.auth
  const firebase = props.firebase
  
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <p>HELLO FROM SIGN IN</p>
      <button class="signInButton" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default SignIn
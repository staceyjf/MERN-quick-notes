import { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

function AuthPage({user, setUser}) {
  // 'clicked' state variable - data-related
  const [clicked, setClicked] = useState(true);
  const buttonText = !clicked ? 'Login' : 'Sign up';

  function handleToggle() {
    setClicked(!clicked) // toggle the value which is why it is negative
  }

 return (
   <main>
     <>
     <h1>Welcome to Quick Notes</h1>
        {clicked ? (
          <>
            <h4>Please Login</h4>
            <LoginForm user={user} setUser={setUser} />
            <p>Don't have an account?</p>
          </>
        ) : (
          <>
            <h4>Please sign up</h4>
            <SignUpForm setUser={setUser} />
            <p>Have an account?</p>
          </>
        )}
        
        <button onClick={handleToggle}>{buttonText}</button>
      </>
   </main>
 )
}

export default AuthPage
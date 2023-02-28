import React, { useRef } from 'react'
import { Button, ForwardedInput } from '../../components';
import validateCredentials from '../../utils/validate';


const LogIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {usernameError, passwordError} = validateCredentials(usernameRef.current!.value, passwordRef.current!.value);

    if (!usernameError && !passwordError) {
      console.log("ok")
    }

    return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <ForwardedInput name="username" type="text" placeholder="username" ref={usernameRef}/>
      <ForwardedInput name="password" type="password" placeholder="password" ref={passwordRef}/>
      <Button text="Log Me In"/>
    </form>
  )
}

export default LogIn;
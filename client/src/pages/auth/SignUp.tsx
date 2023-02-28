import React, { useRef } from 'react'
import { Button, ForwardedInput } from '../../components';
import validateCredentials from '../../utils/validate';

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateCredentials(usernameRef.current!.value, passwordRef.current!.value, password2Ref.current!.value);



  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <ForwardedInput name="username" type="text" placeholder="username" ref={usernameRef}/>
      <ForwardedInput name="password" type="password" placeholder="password" ref={passwordRef}/>
      <ForwardedInput name="password2" type="password" placeholder="repeat password" ref={password2Ref}/>
      <Button text="Sign Me Up"/>
    </form>
  )
}

export default SignUp
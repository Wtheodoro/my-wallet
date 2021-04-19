import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth'

const SignIn = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useAuth()

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="My Wallet"/>
        <h2>My Wallet</h2>
      </Logo>

      <Form onSubmit={()=> signIn(email, password)}>
        <FormTitle>Sign In</FormTitle>
        <Input type="email" placeholder="E-mail" 
          onChange={(e) => setEmail(e.target.value)} required
        />
        <Input type ="password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} required
        />
        <Button type="submit">Access</Button>
      </Form>
    </Container>
  )
}

export default SignIn;
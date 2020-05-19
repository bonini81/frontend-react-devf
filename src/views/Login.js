import React from 'react';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Login = () => {
  return (
    <React.Fragment>
      <h1>Signup on Maui App</h1>
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" id="userName" name="inputUserName" 
          placeholder="type your User name" />
        </FormGroup>
      
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="type your password here" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Login;
import React,{useContext} from 'react';
import { Wrapper } from './Login.styles';
import {storeProvider} from '../../../store/storeContext'

 const Login = () => {
    const dataContext = useContext(storeProvider)
    console.log(dataContext)
  return (
      <Wrapper>
       login page
    </Wrapper>
  );
}
export default Login

import React from 'react';
import { useAuthContext } from '../../../context/AuthContext'

const Home = () => {
  console.log(useAuthContext())
  const { contextData, dispatch} = useAuthContext()
  return (
    <div>
      home page view
      <button
      className='bg-indigo-500 py-2 px-4'
      onClick = { () => dispatch({ type : 'login',payload: {name:'james',age:23,gender:'male',likesApple:true}})}
      >Add to user</button>
      <button
       className='bg-red-500 py-2 px-4'
      onClick = { () => dispatch({ type : 'logout'})}
      >remove user</button>
    </div>
  );
}

export default Home;

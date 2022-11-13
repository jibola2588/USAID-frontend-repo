import { useState,Suspense,lazy } from 'react'
import { PageLoader } from './components/page-loader'
import {Routes,Route,Link} from 'react-router-dom'



const Login = lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/authed/login/Login'))
const VerifyEmail = lazy(() => import(/*webpackChunkName:'verifyEmail Page'*/'./pages/authed/Verify-email/verify-email'))
const  ForgottonPassword= lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/authed/forgot-password/ForgottonPassword'))



function App() {

  return (
    <div className="App">
      {/* <p className="text-primary">hello</p>
      <p className="text-secondary">hello</p>
      <p className="text-blue-450">hello</p>
      <Link to='/login'>
         login
      </Link>
      <p className="mt-4"></p>
      <Link to='/forgottonPassword'>
        ForgottonPassword
      </Link> */}
      <Suspense fallback = {<PageLoader/>}>
          <Routes>
             <Route path='/' element= { <Login />} />
             <Route path='/verifyEmail' element= { <VerifyEmail />} />
             <Route path='/forgottonPassword' element= { <ForgottonPassword/>} />
          </Routes>
      </Suspense> 
    </div>
  )
}

export default App
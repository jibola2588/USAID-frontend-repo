import { Suspense,lazy } from 'react'
import { PageLoader } from './components/page-loader'
import {Routes,Route} from 'react-router-dom'



const Login = lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/authed/login/Login'))
const VerifyEmail = lazy(() => import(/*webpackChunkName:'verifyEmail Page'*/'./pages/authed/Verify-email/verify-email'))
const  ForgottonPassword= lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/authed/forgot-password/ForgottonPassword'))
const  CheckMailBox = lazy(() => import(/*webpackChunkName:'checkMailBox Page'*/'./pages/authed/forgot-password/CheckMailBox'))
const  ResetPassword= lazy(() => import(/*webpackChunkName:'resetPassword Page'*/'./pages/authed/ResetPassword/resetPassword'))



function App() {

  return (
    <div className="App">
      <Suspense fallback = {<PageLoader/>}>
          <Routes>
             <Route path='/login' element= { <Login />} />
             <Route path='/verifyEmail' element= { <VerifyEmail />} />
             <Route path='/forgottonPassword' element= { <ForgottonPassword/>} />
             <Route path='/checkMailBox' element= { <CheckMailBox/>} />
             <Route path='/resetPassword' element= { <ResetPassword/>} />
          </Routes>
      </Suspense> 
    </div>
  )
}

export default App

import { Suspense,lazy } from 'react'
import { PageLoader } from './components/page-loader'
import {Routes,Route} from 'react-router-dom'



const Home = lazy(() => import(/*webpackChunkName:'home Page'*/'./pages/non-authed/home/Home'))
const Login = lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/non-authed/login/Login'))
const VerifyEmail = lazy(() => import(/*webpackChunkName:'verifyEmail Page'*/'./pages/non-authed/Verify-email/verify-email'))
const  ForgottonPassword= lazy(() => import(/*webpackChunkName:'login Page'*/'./pages/non-authed/forgot-password/ForgottonPassword'))
const  CheckMailBox = lazy(() => import(/*webpackChunkName:'checkMailBox Page'*/'./pages/non-authed/forgot-password/CheckMailBox'))
const  ResetPassword= lazy(() => import(/*webpackChunkName:'resetPassword Page'*/'./pages/non-authed/ResetPassword/resetPassword'))



function App() {

  return (
    <div className="App">
      <Suspense fallback = {<PageLoader/>}>
          <Routes>
             <Route path='/' element= { <Home />} />
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

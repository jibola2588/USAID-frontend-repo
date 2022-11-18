import React, { useContext,useState,useRef,useEffect} from 'react';
import  {Wrapper,Instruction } from './Login.styles'
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Vertical_RGB_294.svg'
import { FaEye, FaEyeSlash,FaInfoCircle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Login = () => {
  const navigate = useNavigate()

  const [viewPassword, setViewPassword] = useState('password');
  const numberInput = useRef(null);


  const togglePasswordView = () => {
    if (viewPassword  === 'password') {
      setViewPassword('text')
    } else {
      setViewPassword('password')
    }
  };

  const emailRef = useRef();
  const errRef = useRef();

  const [email,setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)

  useEffect(() => {
   emailRef.current.focus()
  },[])

  useEffect(() => { 
    setValidEmail( EMAIL_REGEX .test(email))
  },[email])

  useEffect(() => { 
    setValidPwd( PWD_REGEX .test(pwd))
  },[pwd])

  useEffect(() => { 
    setError('')
  },[email,pwd])

  const handleForm = e => { 
    e.preventDefault();

    const vE = EMAIL_REGEX .test(email)
    const vP = PWD_REGEX .test(pwd)

    console.log(vE,vP)

    if(!vE || !vP) { 
      setError('invalid entry')
      return
    }
    setLoading(true)
    console.log(email,pwd)
    setSuccess('signed in successfully,you are re-directed to verify your mail')
    setTimeout(() => { 
      navigate('/verifyEmail')
    },1200)

  }

  return (
    <Wrapper>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="h-[7rem] w-[8rem] flex items-center m-auto">
                <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />
              </a>
               
            { error && <div role="alert" class="rounded border-l-4 border-red-500 bg-red-50 p-4">
               <strong class="block font-medium text-red-700"> {error}</strong>
            </div>}
            { success && <div role="alert" class="rounded border-l-4 border-green-500 bg-green-50 p-4">
               <strong class="block font-medium text-green-700"> {success}</strong>
            </div>}


              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]">
                Log in to your account
              </h1>

              <p className='text-center text-[16px] text-[#667085] font-[400] mt-[0]' style={{ marginTop: '0' }}>Welcome back! Please enter your details.</p>
              <form 
              onSubmit = {handleForm}
              className="space-y-4 md:space-y-6">
                <div>
                  <label 
                  for="email" 
                  className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">
                    Email 
                    </label>
                  <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  
                  autoComplete="off"
                  value={email}
                  onChange = { e => setEmail(e.target.value)}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  ref = {emailRef}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Enter your email" 
                  required 
                  />
                  { emailFocus && email && !validEmail  ?( <Instruction  id="uidnote">
                            <FaInfoCircle  />
                            Must be a valid mail address.<br />
                           
                        </Instruction >  ) : '' }  
                </div>
                <div className='relative'>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Password</label>
                  <input 
                  type={viewPassword} 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                  value={pwd}
                  onChange = {e => setPwd(e.target.value)} 
                  autoComplete="off"
                  ref={numberInput}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                   className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400"
                  required />
                  
                   <span class="absolute  inline-flex items-center right-4 top-[55%]">
                <div className="flex justify-end">
                  {viewPassword === 'password' ? (
                    < FaEye 
                    style = {{width:22, height:20,color:'#344054',cursor:'pointer'}}
                    onClick={ togglePasswordView } />
            
                  ) : (
                    < FaEyeSlash 
                    style = {{ width:22, height:20,color:'#344054',cursor:'pointer'}}
                    onClick={ togglePasswordView }  />
                  )
                  }       
                   </div>
              </span>
                </div>
              { pwdFocus && !validPwd  ? (<Instruction  id="pwdnote">
                            <FaInfoCircle  />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </Instruction > ) : ''  }
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-[#344054] font-[500] dark:text-gray-300">Remember Password</label>
                    </div>
                  </div>
                  <Link to='/forgottonPassword' className="text-sm font-medium text-[#3068AE] hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
            
                <button 
                          disabled = {!validEmail || !validPwd  ? true : false}
                type="submit" 
                className={`w-full text-white bg-[#3068AE] hover:bg-primary-700 rounded-lg text-sm px-5 py-2.5 text-center outline-none cursor-pointer ${ !validEmail || !validPwd ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                  { loading ? 'loading..':' Sign in'}
                  </button>
              
              </form>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
  );
}
export default Login

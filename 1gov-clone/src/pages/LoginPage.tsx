import OneGovLogo from '../assets/logos/1_gov_logo3.png'
import { Link } from 'react-router'
import CityGateImg from '../assets/images/city_gate.png'
import PasswordVisibilty from '../components/PasswordVisibilty'

const LoginPage = () => {
    return (
        <>
            <title>1Government Login</title>

            <div className='lg:grid grid-cols-2'>

                <div className="lg:h-screen h-[40vh] bg-cover bg-center relative lg:order-2 "
                    style={{ backgroundImage: `url(${CityGateImg})` }}>
                    <p className="hidden lg:block absolute top-6 left-6 text-white text-[20px]">Resources ⌵ Help</p>
                </div>

                <div className='lg:order-1 flex flex-col justify-center text-center items-center w-full'>
                    <div className="">
                        <img src={OneGovLogo} alt='1Gov Logo' className='h-10 lg:h-12 mx-18 my-4 lg:mb-18 lg:' />
                    </div>

                    <div className='w-full flex flex-col gap-6 justify-center items-center '>
                        <div className='w-72 flex  flex-col justify-start'>
                            <p className='font-bold text-[#212529] text-[28px] text-left'>Welcome Back!</p>
                            <p
                                className='text-[16px] text-[#667185] text-left font-bold mb-6'
                            >
                                Enter your credentials to access the MDA
                            </p>
                            <form className='flex flex-col gap-2 justify-start '>

                                {/* <div> */}

                                <label className='text-[14px] text-[#101928] font-bold text-left'>MDA</label>

                                <input type='text' placeholder='Enter your MDA' className=' h-10 border border-[#bcbbbb] rounded-md p-2 ' />
                                {/* </div> */}

                                {/* <div> */}

                                <label className='text-[14px] text-[#101928] font-bold text-left'>Email Address</label>
                                <input type='text' placeholder='Enter Email' className='h-10 border border-[#bcbbbb] rounded-md p-2' />
                                {/* </div> */}

                                {/* <div> */}
                                <label className='text-[14px] text-[#101928] font-bold text-left'>Password</label>
                                <PasswordVisibilty placeholder='Enter password' />
                                {/* </div> */}

                                <Link to='/forgot-password'><p className='text-[16px] text-[#BC1824] '>Forgot Password?</p></Link>
                                <button type='submit' className='h-10 bg-[#033E03] text-white rounded-md mb-12'>Login</button>

                            </form>

                        </div>
                    </div>

                    <div>
                        {/* <ul > */}
                            <div className='text-[14px] text-[#0D6EFD] space-x-1 '>
                                <Link to='' className='underline'>
                                    Privacy Policy
                                </Link>
                                <span className='text-[#212529bf]'>•</span>
                                <Link to=''className='underline'>
                                    Terms of Use 
                                </Link>
                                <span className='text-[#212529bf]'>•</span>
                                <Link to=''className='underline'>Security</Link>
                                
                            </div>

                            
                        {/* </ul> */}
                    </div>
                </div>

            </div>
        </>
    )

}

export default LoginPage
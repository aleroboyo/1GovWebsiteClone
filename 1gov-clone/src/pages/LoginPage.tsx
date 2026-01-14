import OneGovLogo from '../assets/logos/1_gov_logo3.png'
import { Link } from 'react-router'
import CityGateImg from '../assets/images/city_gate.png'
import PasswordVisibilty from '../components/PasswordVisibilty'

const LoginPage = () => {
    return (
        <>
            <title>1Government Login</title>

            <div className='lg:grid grid-cols-2'>

                <div className="h-76 bg-cover bg-center relative lg:order-2 lg:h-screen"
                    style={{ backgroundImage: `url(${CityGateImg})` }}>
                    <p className="hidden lg:block absolute top-6 left-6 text-white">Resources ⌵ Help</p>
                </div>

                <div className='lg:order-1 text-center'>
                    <div className="">
                        <img src={OneGovLogo} alt='1Gov Logo' className='h-12 ml-56 mt-16 mb-30' />
                    </div>

                    <div>
                        <div>
                            <p className='font-bold text-[#212529] text-[28px]'>Welcome Back!</p>
                            <p className='text-[16px] text-[#667185] font-bold w-56 text-left relative left-64 mb-6'>Enter your credentials to access the MDA</p>
                            <form className='flex flex-col gap-2'>
                                <label className='text-[14px] text-[#101928] font-bold w-52 relative left-64 text-left'>MDA</label>
                                <input type='text' placeholder='Enter your MDA' className='w-54 h-10 border border-[#bcbbbb] rounded-md pl-2 relative left-64'/>
                                <label className='text-[14px] text-[#101928] font-bold w-52 relative left-64 text-left'>Email Address</label>
                                <input type='text' placeholder='Enter Email' className='w-54 h-10 border border-[#bcbbbb] rounded-md pl-2 relative left-64' />
                                <label className='text-[14px] text-[#101928] font-bold w-52 relative left-64 text-left'>Password</label>
                                <PasswordVisibilty placeholder='Enter password'/>
                            </form>
                            <p className='text-[16px] text-[#BC1824] mb-4'>Forgot Password?</p>
                            <button className='w-54 h-10 bg-[#033E03] text-white ml-1 rounded-md mb-12'>Login</button>
                        </div>
                    </div>

                    <div>
                        <ul className='text-[14px] text-[#0D6EFD]  border border-red-500  w-54 ml-60 justify-center   text-center'>
                            <Link to=''><li className='underline '>Privacy Policy<span className='text-[#212529bf] ml-4 '>•</span></li></Link>
                            <Link to=''><li className='underline'>Terms of Use<span className='text-[#212529bf] ml-4'>•</span></li></Link>
                            <Link to=''><li className='underline'>Security</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}

export default LoginPage
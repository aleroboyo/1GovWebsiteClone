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
                            <p className='text-[16px] text-[#667185] font-bold w-56 text-left relative left-[16.2rem]'>Enter your credentials to access the MDA</p>
                            <form className='flex flex-col'>
                                <label>MDA</label>
                                <input type='text' placeholder='Enter your MDA' />
                                <label>Email Address</label>
                                <input type='text' placeholder='Enter Email' />
                                <label>Password</label>
                                <PasswordVisibilty placeholder='Enter password'/>
                            </form>
                            <p>Forgot Password?</p>
                            <button>Login</button>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <Link to=''><li>Privacy Policy•</li></Link>
                            <Link to=''><li>Terms of Use•</li></Link>
                            <Link to=''><li>Security</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}

export default LoginPage
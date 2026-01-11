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

                <div className='lg:order-1'>
                    <div className="">
                        <img src={OneGovLogo} alt='1Gov Logo' />
                    </div>

                    <div>
                        <div>
                            <p>Welcome Back!</p>
                            <p>Enter your credentials to access the MDA</p>
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
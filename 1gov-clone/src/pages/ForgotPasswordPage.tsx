import OneGovLogo from "../assets/logos/1_gov_logo3.png"
import Hamburger from "../components/Hamburger"
import { Link } from "react-router"
import ResetPasswordForm from "../components/ResetPasswordForm"

const ForgotPasswordPage = () => {
    return (
        <>

            <div>
                <header className='pt-10 mb-18 p-14 w-full'>
                    <nav className="flex fixed gap-118 bg-white">
                        <div className="px-20">
                            <img src={OneGovLogo} alt='1Gov Logo' className='h-12' />
                        </div>
                        <div className='lg:hidden'>
                            <Hamburger />
                        </div>
                        <div className='hidden lg:flex' >
                            <ul className='flex space-x-4 text-[#495057] text-[14px] pr-4'>
                                <li>
                                    <button className='p-1 pl-2.5 pr-2.5 rounded-full text-white text-[13px] bg-[#FF3226] mt-2'>reportgov <span className='text-[9px] bg-[#2D8B10] rounded-md pt-[0.2rem] pb-[0.2rem] pr-[0.2rem] pl-[0.2rem]'>.ng</span></button>
                                </li>
                                <li className='pt-1 pb-1 pl-6 pr-6 rounded-full h-10 border border-[#035E35] text-[20px] text-[#035E35] font-medium'>
                                    <Link to="/login"><button>Login</button></Link>
                                </li>
                                <li>
                                    <button className='pt-1 pb-1 pl-6 pr-6 rounded-full text-white bg-[#035E35] text-[20px]'>Sign up</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main className="px-36">

                    <div className="w-112.75">
                        <div>
                            <h1 className="text-[27.94px] text-[#212529] font-medium mt-10 mb-6">Reset Password</h1>
                            <p className="text-[16px] text-[#212529] mb-18">Enter your email address and we’ll send you an email with instructions to reset your password.</p>
                        </div>
                       <div>
                            <ResetPasswordForm/>
                       </div>
                        <div>
                            <p className="text-[16px] text-[#212529] mb-18">If you don’t receive an email from us within a few minutes, check your spam filter as sometimes they end up in there.</p>
                        </div>
                    </div>

                </main>

                <footer >

                    <div>
                        <ul className="flex text-[#4D4D4D] bg-[#9292920D] gap-6 py-8 px-36">
                            <li>Privacy Policy</li>
                            <li>Terms of use</li>
                            <li>Security</li>
                            <li className="text-[#6A6A6A]">© 2026 1Gov, Inc.</li>
                        </ul>
                    </div>

                </footer>

            </div>

        </>
    )
}

export default ForgotPasswordPage
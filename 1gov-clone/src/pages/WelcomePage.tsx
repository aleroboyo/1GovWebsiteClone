import CookieAlert from '../components/CookieAlert'
import Hamburger from '../components/Hamburger'
import { useState } from 'react'
import { Link } from 'react-router'
import { products } from '../data/products'
import OneGovLogo from '../assets/logos/1_gov_logo3.png'
import SearchIcon from '../assets/icons/search_icon.png'
import TodoListIcon from '../assets/icons/todo_list_icon.png'
import GalaxyBackboneLogo from '../assets/logos/galaxy_logo.png'
import IgIcon from '../assets/icons/ig_icon.png'
import TwitterIcon from '../assets/icons/twitter_icon.png'
import FacebookIcon from '../assets/icons/facebook_icon.png'
import YoutubeIcon from '../assets/icons/youtube_icon.png'

const WelcomePage = () => {
    const [openResources, setOpenResources] = useState(false)


    return (
        <>
            <CookieAlert/>

            <div className='min-w-full'>

                <header className='fixed bg-white pt-10 pb-4 p-14 w-full'>
                    <nav className="flex justify-between">
                        <div>
                            <img src={OneGovLogo} alt='1Gov Logo' className='h-12'/>
                        </div>
                        <div className='lg:hidden'>
                            <Hamburger/>
                        </div>
                        <div className='hidden lg:flex'>
                            <ul className='flex space-x-4 text-[#495057] text-[14px] pr-4'>
                                <li>
                                    <button onClick={() => 
                                        setOpenResources(prev => !prev)} className=''>
                                        Resources ⌵
                                    </button>
                                    {openResources && (
                                    <div className='flex'>
                                        <p className='font-bold text-[#025E35] bg-[#E6F4EB] text-[40px] p-6 w-[244.44px] h-40 rounded-l-md'>Resource</p>
                                        <div>
                                            <ul className='text-[#212429] mt-6 p-6 text-[14px]'>
                                                <li className='mb-4'>Policy Statement</li>
                                                <li>GBB Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                    )}
                                </li>
                                <li>Help</li>
                                <li>
                                    <button className='p-1 pl-2.5 pr-2.5 rounded-full text-white text-[13px] bg-[#FF3226]'>reportgov<span className='text-[9px]'> .ng</span></button>
                                </li>
                                <li className='pt-1 pb-1 pl-6 pr-6 rounded-full h-8 border border-[#035E35] text-[15px] text-[#035E35] font-medium'>
                                    <Link to="/login"><button>Login</button></Link>
                                </li>
                                <li>
                                    <button className='pt-1 pb-1 pl-6 pr-6 rounded-full text-white bg-[#035E35] text-[14px]'>Sign up</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main>

                    <section className='pt-30 text-[#212529] text-center'>
                        <div>
                            <p className='ml-154 pt-1 pb-1 rounded-full bg-[#d8fae5] text-[20px] font-medium w-51.25'>1Gov Applications</p>
                        </div>
                        <div>
                            <p className='text-[60px] font-extrabold p-2 mr-80 ml-80 mb-8 leading-18'>Fully Integrated Modules with the Option to Choose!</p>
                        </div>
                        <div className='flex justify-center font-semibold text-[16px]'>
                            <div>
                                <button className='border rounded-full border-[#2D8645] text-[#2D8645] p-4 pr-8 pl-8 mr-4'>Request for training quote</button>
                            </div>
                            <div>
                                <button className='border rounded-full bg-[#2D8645] text-white p-4 pr-8 pl-8'>Request for software quote</button>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div>
                            <p className='text-[#198754] text-[31.1px] font-bold text-center mt-20 '>Checkout the application product sheet</p>
                        </div>
                        <div className='lg:grid gap-10 grid-cols-3 mt-20 pr-10 pl-17 w-350'>
                            {products.map((product) => (
                                <div key={product.title} className='border border-gray-200 rounded-2xl shadow-[0_0_0_5px_rgba(0,0,0,0.03)] pl-8 pr-20'>
                                    <img src={product.icon} alt={product.title} className='ml-72 w-20' />
                                    <div className='text-[24px] font-extrabold mb-2'>{product.title}</div>
                                    <div className='mb-4'>{product.description}</div>
                                    <div>
                                        <Link to={product.link} className='text-[#2D8645] font-semibold'>
                                            Learn more<img src={SearchIcon} alt="Search Icon" className='relative bottom-10 left-22'/>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className='text-[#1C3D1C] text-[31px] font-extrabold text-center mt-8'>MORE COMING SOON!</p>
                        </div>
                    </section>

                    <section>
                        <p className='text-[#1C3D1C] text-[31px] font-extrabold text-center mt-10 mb-24'>Click here to <Link to="" className='text-[#2D8645] underline'>view</Link> our digital brochure</p>
                    </section>

                    <section>
                        <div className='lg: flex gap-7 ml-14'>
                            <div className='bg-[#EFEFEF] rounded-2xl w-160 h-50 p-8 flex'>
                                <div>
                                    <img src={TodoListIcon} alt='Todo List Icon' className='w-30 border border-white bg-white rounded-full p-2 mr-16'/>
                                </div>
                                <div>
                                    <p className='text-[24px] font-extrabold mb-2'>To implement any of the 1Government Cloud Saas</p>
                                    <p className='text-[16px] mb-6'>See list of Certified Professional Service Organizations</p>
                                    <p><Link to="" className='text-[16px] text-[#2D8645] font-semibold'>View List</Link></p>
                                </div>
                            </div>
                            <div className='bg-[#EFEFEF] rounded-2xl w-165 h-50 p-8 flex'>
                                <div>
                                    <img src={GalaxyBackboneLogo} alt='Galaxy Backbone Logo' className='w-28 border h-28 p-2 border-white bg-white rounded-full mr-16'/>
                                </div>
                                <div>
                                    <p className='text-[24px] font-extrabold mb-2'>1Government is hosted by Galaxy Backbone.</p>
                                    <p><Link to="" className='text-[16px] text-[#2D8645] font-semibold'>See more at Galaxy Backbone</Link></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='lg:flex ml-13 mt-18 gap-50'>
                        <div className=''>
                            <div>
                                <img src={OneGovLogo} alt='1Gov Logo'  className='h-10 mb-10'/>
                            </div>
                            <div>
                                <ul className='flex -ml-1'>
                                    <li><Link to=""><img src={IgIcon} alt='IG Icon' className='w-12'/></Link></li>
                                    <li><Link to=""><img src={TwitterIcon} alt='Twitter Icon' className='w-12'/></Link></li>
                                    <li><Link to=""><img src={FacebookIcon} alt='Facebook Icon' className='w-12'/></Link></li>
                                    <li><Link to=""><img src={YoutubeIcon} alt='Youtube Icon' className='w-12'/></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p  className='text-[18px] text-[#4D4D4D] font-semibold'>Solutions</p>
                            <ul  className='text-[12px] text-[#4D4D4D] font-medium leading-7'>
                                <li><Link to="">Gov ECMS</Link></li>
                                <li><Link to="">Asset Management</Link></li>
                                <li><Link to="">Gov Drive</Link></li>
                                <li><Link to="">In Mail</Link></li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-[18px] text-[#4D4D4D] font-semibold'>Resources</p>
                            <ul className='text-[12px] text-[#4D4D4D] font-medium leading-7'>
                                <li><Link to="">GBB Support</Link></li>
                                <li><Link to="">Policy Statement</Link></li>
                            </ul>
                        </div>

                        <div className='-ml-12.5'>
                            <p className='text-[18px] text-[#4D4D4D] font-semibold'>Legal</p>
                            <ul className='text-[12px] text-[#4D4D4D] font-medium leading-7'>
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Terms of use</Link></li>
                            </ul>
                        </div>
                    </section>

                </main>

                <footer className='bg-[#9292920D]'>
                    <div className='mt-16 p-4 pb-10 pl-15 text-[16px] text-[#6A6A6A] font-extralight'>© 2026 1Government.</div>
                </footer>

            </div>
        </>
    )

}

export default WelcomePage
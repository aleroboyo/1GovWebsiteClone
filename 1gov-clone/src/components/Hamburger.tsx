import { useState } from "react"
import CoatOfArmsImg from '../assets/images/coat_of_arms.png'
import { Link } from 'react-router'

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-between w-6 h-6">
                    <span className="bar block h-1 w-full bg-red-800"></span>
                    <span className="bar block h-1 w-full bg-red-800"></span>
                    <span className="bar block h-1 w-full bg-red-800"></span>
                </button>

                {menuOpen && (
                    <div className="fixed inset-0 bg-white z-50 flex flex-col">
                        <div className="flex justify-between p-4">
                            <img src={CoatOfArmsImg} alt='Coat of Arms'/>
                            <button onClick={() => setMenuOpen(false)} className="text-red-800">X</button>
                        </div>
                        <div>
                            <ul className="flex flex-col items-center mt-20 space-y-4 text-lg">
                                <li>Resources</li>
                                <li>Help</li>
                                <li>
                                    <button>reportgov<span>.ng</span></button>
                                </li>
                                <li>
                                    <button><Link to="/login">Login</Link></button>
                                </li>
                                <li>
                                    <button>Sign up</button>
                                </li>
                            </ul>
                        </div> 
                    </div>  
                )}
            </div>
        </>
    )
}

export default Hamburger
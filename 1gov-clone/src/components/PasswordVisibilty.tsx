import { useState } from 'react'
import SeeIcon from '../assets/icons/see_password_icon.png'
import UnseeIcon from '../assets/icons/unsee_password_icon.png'

const PasswordVisibilty = ({placeholder}: {placeholder: string}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div>
                <input type={showPassword ? 'text' : 'password'}
                placeholder={placeholder} className='w-54 h-10 border border-[#bcbbbb] rounded-md pl-2 relative left-5 mb-4'/>
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='w-8 relative top-2 right-4'><img src={showPassword ? UnseeIcon : SeeIcon }/></button>
            </div>
        </>
    )
}


export default PasswordVisibilty
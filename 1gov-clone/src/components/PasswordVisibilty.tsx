import { useState } from 'react'
import SeeIcon from '../assets/icons/see_password_icon.png'
import UnseeIcon from '../assets/icons/unsee_password_icon.png'

const PasswordVisibilty = ({placeholder}: {placeholder: string}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div className='relative'>
                <input type={showPassword ? 'text' : 'password'}
                placeholder={placeholder} className=' w-full h-10 border border-[#bcbbbb] rounded-md p-2'/>
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='w-8 absolute right-2 top-1'><img src={showPassword ? UnseeIcon : SeeIcon }/></button>
            </div>
        </>
    )
}


export default PasswordVisibilty
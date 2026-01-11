import { useState } from 'react'
import SeeIcon from '../assets/icons/see_password_icon.png'
import UnseeIcon from '../assets/icons/unsee_password_icon.png'

const PasswordVisibilty = ({placeholder}: {placeholder: string}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div>
                <input type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}/>
                <button type='button' onClick={() => setShowPassword(!showPassword)}><img src={showPassword ? UnseeIcon : SeeIcon }/></button>
            </div>
        </>
    )
}


export default PasswordVisibilty
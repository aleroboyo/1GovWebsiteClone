import { useState } from "react"
import { Link } from "react-router"

const ResetPasswordForm = () => {
    const [domain, setDomain] = useState('')
    const [email, setEmail] = useState('')

    const filledForm = domain.trim() && email.trim()

    return (
        <>
            <form>
                <div>
                    <input type="text" placeholder="Enter Domain Name" className="border border-gray-400 p-2 w-md" onChange={(e) => setDomain(e.target.value)} />
                    <input type="email" placeholder="Enter email address" className="border border-gray-400 p-2 w-md" onChange={(e) => setEmail(e.target.value)} />
                    <Link to='/login'><button className="text-[15px] text-[#2F2E7C] border border-[#2F2E7C] px-6 py-2 rounded-full mb-4">Back</button></Link>
                </div>
                <div>
                    <button type='submit' className={`text-white text-[14px] px-52 py-2 rounded-full mb-4 ${filledForm ? "bg-[#035E35]" : "bg-[#5d8270] cursor-not-allowed"}`} disabled={!filledForm}>Reset</button>
                </div>
            </form>

        </>
    )
}

export default ResetPasswordForm




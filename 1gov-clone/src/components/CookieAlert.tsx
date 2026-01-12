import { useState} from "react"
import { Link } from 'react-router'

const CookieAlert = () => {
    const [showAlert, setShowAlert] = useState(true)

    return (
        <>
        {showAlert && 
            <div className="position: fixed bottom-0 bg-white h-100 mb-5 mr-8 ml-8 shadow-2xl text-center pl-18 pr-18 lg:flex lg:h-70 lg:text-left lg:pl-12 lg:w-[60rem] lg:ml-[15rem]">
                <div>
                    <p className="text-[40px] text-[#035E35] font-extrabold mt-20 mb-6">We value your privacy</p>
                    <p className="text-[16px] text-[#76808B] lg:mr-14">We use cookies to identify you as a user and improve your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies and agree to our <Link to='' className="text-[#035E35] underline">privacy policy.</Link> </p>
                </div>
                <div className=" gap-8 flex text-[40px] lg:position: relative bottom-[100rem]">
                    <div>
                        <button onClick={() => (setShowAlert(false))} className="text-white bg-[#035E35] text-[14px] pt-3 pb-3 pr-8 pl-8 rounded-full">Accept</button>
                    </div>
                    <div>
                        <button onClick={() => (setShowAlert(false))} className="text-[#035E35] underline text-[18px]">Reject</button>
                    </div>
                </div>
            </div>}
            
        </>
    )
}

export default CookieAlert
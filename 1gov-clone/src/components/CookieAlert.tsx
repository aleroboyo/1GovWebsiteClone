import { useState} from "react"
import { Link } from 'react-router'

const CookieAlert = () => {
    const [showAlert, setShowAlert] = useState(true)

    return (
        <>
        {showAlert && 
            <div className="position: fixed bottom-0 lg:flex">
                <div>
                    <p>We value your privacy</p>
                    <p>We use cookies to identify you as a user and improve your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept', you consent to our use of cookies and agree to our <Link to=''>privacy policy.</Link> </p>
                </div>
                <div className="flex">
                    <div>
                        <button onClick={() => (setShowAlert(false))}>Accept</button>
                    </div>
                    <div>
                        <button onClick={() => (setShowAlert(false))}>Reject</button>
                    </div>
                </div>
            </div>}
            
        </>
    )
}

export default CookieAlert
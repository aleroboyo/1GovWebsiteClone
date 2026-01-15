import { Routes , Route } from 'react-router'
import  WelcomePage from './pages/WelcomePage'
import  LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<WelcomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
    </Routes>
    </>
  )
}

export default App

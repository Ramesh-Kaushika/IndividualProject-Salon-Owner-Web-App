import {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import Verify from "./pages/Verify/Verify.jsx";
import CreateNewPassword from "./pages/CreateNewPassword/CreateNewPassword.jsx";
import Main from "./components/Main/Main.jsx";
import AddPromotion from "./pages/AddPromotion/AddPromotion.jsx";

function App() {
    // State to manage login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
            {isLoggedIn ? (
                <Main/>
            ) : (
                <div>
                    <Routes>
                        <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                        <Route path={'/register'} element={<Register/>}/>
                        <Route path={'/login'} element={<Login onLogin={handleLogin}/>}/>
                        <Route path={'/forgot-password'} element={<ForgotPassword/>}/>
                        <Route path={'/verify'} element={<Verify/>}/>
                        <Route path={'/create-new-password'} element={<CreateNewPassword/>}/>
                    </Routes>
                </div>
            )}
        </>
    )
}

export default App;

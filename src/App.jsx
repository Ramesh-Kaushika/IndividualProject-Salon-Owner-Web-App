import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <Routes>
                    <Route path={'*'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>

            </div>
        </>
    )
}

export default App

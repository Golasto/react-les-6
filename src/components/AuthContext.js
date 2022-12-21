import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const AutContext = createContext();

export default function AuthApp({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState({isAuth: false, username: '', email: ''});
    const navigate = useNavigate();

    const data = {
        auth: isAuthenticated,
        logIn: () => {
            setIsAuthenticated({isAuth: true, email: document.getElementById("email").value, username: document.getElementById("username").value});
            console.log('Gebruiker is ingelogd!');
            navigate('/profile')
        },
        logOut: () => {
            setIsAuthenticated({isAuth: false, user: '', email: ''});
            console.log('Gebruiker is uitgelogd');
            navigate('/')
        }
    }
    return (
        <>
            <AutContext.Provider value={data}>
                {children}
            </AutContext.Provider>
        </>
    )
}
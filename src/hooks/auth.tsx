import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

interface IChildrenProps {
    children: React.ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IChildrenProps> = ({children}) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@money:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        // if(email === 'macsuel@email.com' && password === '123') {
        //     localStorage.setItem('@money:logged', 'true');
        //     setLogged(true);
        // } else {
        //     alert('Senha ou usuário inválidos!');
        // }
        if(email === 'macsuel@email.com' && password === '123') {
            localStorage.setItem('@money:logged', 'true');
            setLogged(true);
        } else {
            localStorage.setItem('@money:logged', 'true');
            setLogged(true);
        }
    };

    const signOut = () => {
        localStorage.removeItem('@money:logged');
        setLogged(false);
    };

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };
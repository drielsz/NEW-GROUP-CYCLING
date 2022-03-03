import React, {createContext, useState, useEffect, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {api} from '../services/axios'
import * as auth from '../services/auth'

interface User {
    name: string,
    email: string
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData >({} as AuthContextData)

// JWT (Stateless, no need to store any information there in the back end)
export const AuthProvider: React.FC = ({children}) => {
    const [ user, setUser ] = useState<User | null>(null)
    const [ loading, setLoading ] = useState(false)
    // Check to see if the user is logged in or not.
    useEffect(() => {
        async function loadStoragedData() {
            // To improve you can use the multiple get
            const storagedUser = await AsyncStorage.getItem('@GPCAuth: user');
            const storagedToken = await AsyncStorage.getItem('@GPCAuth: token')
            // Loading

            // Verification
            if (storagedUser && storagedToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser))
                setLoading(false)
            }
        }
        loadStoragedData()
    },[])

    // Login
    async function signIn() {
        const response = await auth.signIn()

        setUser(response.user)

        await AsyncStorage.setItem('@GPCAuth: user', JSON.stringify(response.user))
        await AsyncStorage.setItem('@GPCAuth: token', response.token)
    }
    // LogOut
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
// Creating my own hook.
export function useAuth(){
    const context = useContext(AuthContext);
    return context
}


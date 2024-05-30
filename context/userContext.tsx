import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Models } from 'appwrite';

interface UserContextProps {
    user: Models.User<{}> | null;
    setUser: (user: Models.User<{}> | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Models.User<{}> | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check if user is already logged in when the component mounts
        // (For example, you might want to check cookies or local storage here)
        // Set the user state accordingly
        const fetchUser = async () => {
            const response = await fetch('/api/user')
            const userData = await response.json()
            setUser(userData)
            setLoading(false)
        }
        fetchUser()
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;


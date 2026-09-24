'use client'
import React, { createContext, useState } from 'react';
import { iData } from '../type';

interface UserContextType {
    myPlan: iData[];
    setMyPlan: React.Dispatch<React.SetStateAction<iData[]>>;
    saved: iData[];
    setSaved: React.Dispatch<React.SetStateAction<iData[]>>;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [myPlan, setMyPlan] = useState<iData[]>([]);
    const [saved, setSaved] = useState<iData[]>([]);

    return (
        <UserContext.Provider value={{ myPlan, setMyPlan, saved, setSaved }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
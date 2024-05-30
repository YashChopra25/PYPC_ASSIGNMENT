'use client'
import React, { createContext, useState, ReactNode } from "react";

// Define a type for your UserMap data
export interface UserMapData {
    id: number;
    name: string;
}

// Define a type for your context
export interface UserContextType {
    mapViewUserData: UserMapData[];
    setMapViewUserData: React.Dispatch<React.SetStateAction<UserMapData[]>>;
}

// Create the context
export const MapContext = createContext<UserContextType | null>(null);


// Create the provider component
export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mapViewUserData, setMapViewUserData] = useState<UserMapData[] | []>([]);

    return (
        <MapContext.Provider value={{ mapViewUserData, setMapViewUserData }} >
            {children}
        </MapContext.Provider>
    );
};

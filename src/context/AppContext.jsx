import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [screens, setScreens] = useState([]);
    const [currentScreen, setCurrentScreen] = useState(null);

    const addScreen = (screenData) => {
        setScreens((prev) => [...prev, screenData]);
        setCurrentScreen(screenData);
    };

    return (
        <AppContext.Provider value={{ screens, addScreen, currentScreen, setCurrentScreen }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
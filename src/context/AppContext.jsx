import React, { createContext, useState, useContext, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [screens, setScreens] = useState([]);
    const [currentScreen, setCurrentScreen] = useState(null);

    const addScreen = (screenData) => {
        setScreens((prev) => [...prev, screenData]);
        setCurrentScreen(screenData);
    };

    // Memoize the context value to prevent unnecessary re-renders of consumers
    const value = useMemo(() => ({
        screens,
        addScreen,
        currentScreen,
        setCurrentScreen
    }), [screens, currentScreen]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
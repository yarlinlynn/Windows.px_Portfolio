import { createContext, useContext, useState } from "react";

const ScreenContext = createContext();

export function ScreenProvider( {children} ) {
    const [screen, setScreen] = useState("load"); // load -> login -> desktop

    const goToLogin = () => setScreen('login');
    const goToDesktop = () => setScreen('desktop');
    const reboot = () => setScreen('load')

    return (
        <ScreenContext.Provider 
        value = {{
            screen,
            setScreen, 
            goToLogin, 
            goToDesktop, 
            reboot
        }}
        >
            {children}
        </ScreenContext.Provider>
    )
}

export function useScreen() {
    return useContext(ScreenContext);
}
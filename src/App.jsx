import { useScreen } from "./context/ScreenContext.jsx";

import BootScreen from './components/Screens/BootScreen.jsx';
import LoginScreen from './components/Screens/LoginScreen.jsx';
import Desktop from './components/Screens/Desktop.jsx';

function App() {

  const { screen } = useScreen();

  return (
    <>

    {screen === 'load' && <BootScreen/>}
    {screen === 'login' && <LoginScreen/>}
    {screen === 'desktop' && <Desktop/>}

    </>
  );
}

export default App


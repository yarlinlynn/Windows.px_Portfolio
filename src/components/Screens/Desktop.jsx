import { useScreen } from "../../context/ScreenContext";

// components:
import TaskBar from '../Taskbar/TaskBar.jsx';

// images: 

function Desktop() {

    const { reboot } = useScreen();

    return (
      <main className="bg-[url('./assets/images/desktop-background.jpg')] bg-no-repeat bg-cover bg-right w-full h-screen">
          {/* main content */}
          <section></section>

          {/* taskbar */}
          <TaskBar/>        
      </main>
    )
}

export default Desktop
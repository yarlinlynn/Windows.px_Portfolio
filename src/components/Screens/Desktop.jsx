import { useScreen } from "../../context/ScreenContext";
import dayjs from "dayjs";

// components:

// images: 

function Desktop() {

    const { reboot } = useScreen();

    return (
        <main className="bg-[url('./assets/images/desktop-background.jpg')] bg-no-repeat bg-cover bg-right w-full h-screen">
              {/* main content */}
                <section></section>
                {/* taskbar */}
                <section className='fixed bottom-[0px] left-[0px] w-full h-[30px] flex items-center flex-row bg-custom-gradient z-10'>
                  {/* start button */}
                  <div id="start-btn" className="bg-[url('./assets/icons/start_btn_normal.png')] bg-cover h-full w-[100px] hover:brightness-125 hover:[filter:brightness(1.1)] absolute bottom-[-0.3px] left-[-1px]"></div>
                  {/*  */}
                  <div className='flex justify-start grow h-full overflow-hidden pt-1 '></div>
                  <div className='flex justify-end items-center flex-row shrink-0 max-w-[200px] taskbar-right-bg h-full'>
                    <div className="bg-[url('./assets/icons/TourXP.png')] taskbar-icons "></div>
                    <div className="bg-[url('./assets/icons/SecurityError.png')] taskbar-icons "></div>
                    <div className="bg-[url('./assets/icons/Volume.png')] taskbar-icons "></div>
                    <time className='off-white text-[11px] px-1'>
                      {dayjs().format("h:mm A")}
                    </time>
                  </div>
                </section>
                
        </main>
    )
}

export default Desktop
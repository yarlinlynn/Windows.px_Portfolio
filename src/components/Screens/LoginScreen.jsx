import { useScreen } from "../../context/ScreenContext";

// components:

// images:
import logo from '../../assets/images/windows.png';
import desktopIocn from '../../assets/images/desktop_profile_icon.jpg';

function LoginScreen() {

    const { goToDesktop } = useScreen();

    return (
        <section className='fixed w-screen h-screen bg-[#002d99] top-0 left-0 overflow-hidden text-[#ffffff]'>
        <div className="absolute top-[100px] bottom-[100px] left-[0px] right-[0px] bg-[#587cdb] 
        before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-[3px] before:content-[''] before:bg-gradient-to-r before:from-transparent before:via-[#bad7f8] before:to-transparent 
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-[linear-gradient(to_right,transparent,#f8953d,transparent,transparent)]">
          
          <div className='relative flex w-full h-full items-center justify-center gap-[0.5rem]'>
            <div className='w-[150px]'>
              <div className='flex items-baseline'>
                <p className='tracking-[0.8px] text-[12px]'>
                  Microsoft 
                  <span className='mx-[6px] text-[9px]'>&#174;</span>
                </p>
                <img src={logo} className='w-[25%] ml-[1rem]' alt='Windows Logo'/>
              </div>
              <p className='text-[25px] font-semibold tracking-[0.5px]'>
                Windows 
                <span className='text-[12px] mx-[6px] relative bottom-[10px]'>&#174;</span> 
                <span className='text-[15px] text-[#e67935] relative bottom-[10px] font-semibold'>xp</span> 
              </p>
              <span className='text-[10px]'>To begin, click on username</span>
            </div>
            <div className='flex w-px h-[24rem] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.48)_49.48%,rgba(255,255,255,0)_100%)]'></div>
            <div className="back-gradient relative group">
              <div onClick={goToDesktop}>
                <img src={desktopIocn} className='w-[70px] rounded-[5px] border-[3px] border-white transition-colors duration-300 opacity-[0.8] group-hover:border-[#fdbd32]' alt='Desktop Icon'/>
              </div>
              <p className='text-center group-hover:text-[#fdbd32] mt-[5px] tracking-[0.8px]'>Yarlin</p>
            </div>
          </div>

        </div>
      </section> 
    )
}

export default LoginScreen
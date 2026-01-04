import { useEffect, useRef } from "react";
import { useScreen } from "../../context/ScreenContext";

import img from '../../assets/images/windows_logo.png';

function BootScreen() {

    const { goToLogin } = useScreen();

    useEffect(() => {
    const timer = setTimeout(() => {
      goToLogin();
    }, 6000); // 6 seconds boot time

    return () => clearTimeout(timer);
  }, [goToLogin]);

  const ref = useRef([]);

  useEffect( () => {
    ref.current.forEach( (el, i) => {
      el.animate(
        [
          { transform: "translateX(-30px)" },
          { transform: "translateX(180px)" },
        ],
        {
          duration: 1500,
          delay: i * 150,
          iterations: Infinity,
          easing: "linear",
        }
      )
    })
  }, [goToLogin])

  return (
    <section className='bg-[rgb(0,0,0)] text-[rgb(255,255,255)] w-full h-screen flex items-center justify-center flex-col gap-[3rem]'>
        
        <img src={img} className=" max-w-[280px] w-[60%] filter saturate-105 brightness-105" alt='Windows Logo'/>

        <div className='w-[180px] h-[22px] border rounded-[7px] border-[#b2b2b2] p-[2px] mx-auto overflow-hidden'>
          {[0, 1, 2].map((_, i) => (
          <span
            key={i}
            ref={(el) => (ref.current[i] = el)}
            className="w-[9px] h-full inline-block rounded-[2px]"
            style={{
              background:
                "linear-gradient(to bottom,#2838c7 0%,#5979ef 17%,#869ef3 32%,#869ef3 45%,#5979ef 59%,#2838c7 100%)",
            }}
            />
          ))}
        </div>
       
        <p className='text-[10px] fixed bottom-[1px] left-[5px]'>Microsoft Corporation</p>
        <p className='text-[20px] tracking-[1.5px] skew-x-[-10deg] fixed bottom-[1px] right-[5px]'>Portfolio</p>
     
      </section> 
  )
}

export default BootScreen


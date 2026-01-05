import dayjs from "dayjs";

// components:

function TaskBar() {

    return (
        <section className='fixed bottom-[0px] left-[0px] w-full h-[30px] flex items-center flex-row bg-custom-gradient z-10'>
            {/* start button */}
            <button id="start-btn" className="bg-[url('./assets/icons/start_btn_normal.png')] bg-cover h-full w-[100px] hover:brightness-125 hover:[filter:brightness(1.1)] absolute bottom-[-0.3px] left-[-1px] border-none"></button>
            
            <div className='flex justify-start grow h-full overflow-hidden pt-1 '></div>

            <div className='flex justify-end items-center flex-row shrink-0 max-w-[200px] taskbar-right-bg h-full'>
                <button className="bg-[url('./assets/icons/TourXP.png')] taskbar-icons border-none min-w-[0px] min-h-[0px]"></button>
                <button className="bg-[url('./assets/icons/SecurityError.png')] taskbar-icons border-none min-w-[0px] min-h-[0px]"></button>
                <button className="bg-[url('./assets/icons/Volume.png')] taskbar-icons border-none min-w-[0px] min-h-[0px]"></button>
                <time className='off-white text-[11px] px-1'>
                    {dayjs().format("h:mm A")}
                </time>
            </div>
        </section>
    )
}

export default TaskBar
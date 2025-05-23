import React from 'react'
import Slider from '../../component/HomePageCom/Slider'
import NewsEventNotice from './NewsEventNotice'

const HomePage = () => {
    return (
        //     <div className='bg-[url(https://wallpapercave.com/wp/wp2468647.jpg)] bg-cover bg-center min-h-screen'></div>
        <div className="">
            <Slider />

            <div className="xl:mx-32 md:mx-12 mx-4">

                <NewsEventNotice />
            </div>
        </div>


    )
}

export default HomePage
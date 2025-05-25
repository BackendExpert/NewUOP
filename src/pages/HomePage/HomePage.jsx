import React from 'react'
import Slider from '../../component/HomePageCom/Slider'
import NewsEventNotice from './NewsEventNotice'
import StudyAtUop from './StudyAtUop'
import ResearchHome from './ResearchHome'
import DataCount from '../../component/DataCount/DataCount'

const HomePage = () => {
    return (
        //     <div className='bg-[url(https://wallpapercave.com/wp/wp2468647.jpg)] bg-cover bg-center min-h-screen'></div>
        <div className="">
            <Slider />

            <div className="xl:mx-32 md:mx-12 mx-8">
                <NewsEventNotice />
                <div className="md:mt-8 mb-16 ">
                    <StudyAtUop />
                </div>
                <div className="md:mt-8 mb-16 ">
                    <ResearchHome />
                </div>
                <div className="md:mt-8 mb-16 ">
                    <DataCount />
                </div>
            </div>
        </div>


    )
}

export default HomePage
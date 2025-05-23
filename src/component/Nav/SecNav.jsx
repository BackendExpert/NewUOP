import React, { useEffect, useState } from 'react'
import { secNavData } from './NavData'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import uoplogo from '../../assets/uoplogo.png'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import NavMenuMobile from './NavMenuMobile';

const SecNav = () => {
    const [menuopen, setmenuopen] = useState(false)
    const [atTop, setAtTop] = useState(true);

    const headleopenmenu = () => {
        setmenuopen(!menuopen)
    }

    const checkScroll = () => {
        if (window.scrollY === 0) {
            setAtTop(true);
        } else {
            setAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    const [dksubmenu, setdksubmenu] = useState(false);

    return (
        <div>
            {/* Background changes based on scroll position */}
            <div className={`xl:px-20 px-4 py-4 text-white backdrop-blur-md transition-colors duration-300 ${atTop ? 'bg-[rgba(0,0,0,0.3)]' : 'xl:-mt-10 bg-[#560606]'}`}>

                <div className="flex justify-between">
                    <div className="xl:hidden block">
                        <img src={uoplogo} alt="UOP Logo" className='h-8 w-auto' />
                    </div>

                    <div className="xl:hidden block flex justify-end">
                        <div className="mr-4 xl:hidden ">
                            <div className="flex">
                                <div className="mx-2">සිං</div>
                                <div className="mx-2">த</div>
                                <div className="mx-2">A</div>
                            </div>
                        </div>
                        {
                            !menuopen ?
                                <div className="cursor-pointer">
                                    <TiThMenu className='h-8 w-auto fill-white' onClick={headleopenmenu} />
                                </div>
                                :
                                <div className="cursor-pointer">
                                    <IoClose className='h-8 w-auto fill-white' onClick={headleopenmenu} />
                                </div>
                        }
                    </div>
                </div>

                <div className="xl:block hidden flex justify-end">
                    <div className="flex relative">
                        {secNavData.map((data, index) => (
                            <div
                                className={`${atTop ? 'mx-[1%] mt-0' : 'mt-1 mx-4'}`}
                                key={index}
                                onMouseEnter={() => setdksubmenu(data.id)}
                                onMouseLeave={() => setdksubmenu(false)}
                            >
                                <div className="flex cursor-pointer">
                                    {data.id && Array.isArray(data.submenu) && data.submenu.length ? (
                                        <div className="flex">
                                            <h1 className={`font-semibold uppercase ${dksubmenu === data.id ? 'text-[#e8b910] border-b border-white' : ''}`}>
                                                {data.name}
                                            </h1>
                                            <p className="mt-2 ml-2">
                                                <FaChevronDown className="h-3 w-auto" />
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to={data.link}>
                                                <h1 className="font-semibold uppercase">
                                                    {data.name}
                                                </h1>
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Submenu */}
                                {dksubmenu === data.id && data.submenu && Array.isArray(data.submenu) && (
                                    <div className="absolute top-full -left-20 -right-20 bg-none text-white shadow-lg z-50 pt-4 max-h-[100vh] overflow-y-auto">
                                        <div className="relative"></div>
                                        <div className='absolute inset-0 bg-black opacity-80 mt-4'></div>
                                        <div className="p-8 relative">
                                            <div className="grid grid-cols-4 gap-0">
                                                {data.submenu.map((submenu, submenuIndex) => (
                                                    <div key={submenuIndex}>
                                                        {submenu.menusubL && Array.isArray(submenu.menusubL) && submenu.menusubL.length > 0 ? (
                                                            <div className="py-4">
                                                                <h1 className='text-xl text-[#e8b910]'>
                                                                    {submenu.name === "Sustainability" ? (
                                                                        <a href={submenu.link}>
                                                                            <h1 className="text-[#e8b910] text-xl px-4 hover:bg-[#e8b910] hover:text-[#560606]">
                                                                                {submenu.name}
                                                                            </h1>
                                                                        </a>
                                                                    ) : (
                                                                        <>{submenu.name}</>
                                                                    )}
                                                                </h1>
                                                                <p>
                                                                    {submenu.menusubL.map((subData, submenuLindex) => (
                                                                        <div key={submenuLindex}>
                                                                            {["Policies", "International Collaborations"].includes(subData.name) ? (
                                                                                <a href={subData.link}>
                                                                                    <h1 className="my-4 text-[#e8b910] text-xl px-4 hover:bg-[#e8b910] hover:text-[#560606]">
                                                                                        {subData.name}
                                                                                    </h1>
                                                                                </a>
                                                                            ) : (
                                                                                <a href={subData.link}>
                                                                                    <h1 className="px-4 py-1 hover:bg-[#e8b910] hover:text-[#560606]">
                                                                                        {subData.name}
                                                                                    </h1>
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </p>
                                                            </div>
                                                        ) : (
                                                            <div className="py-4">
                                                                <a href={submenu.link}>
                                                                    <h1 className="text-[#e8b910] text-xl px-4 hover:bg-[#e8b910] hover:text-[#560606]">
                                                                        {submenu.name}
                                                                    </h1>
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NavMenuMobile secNavData={secNavData} menuopen={menuopen} />
        </div>
    )
}

export default SecNav;

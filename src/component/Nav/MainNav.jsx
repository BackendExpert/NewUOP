import React from 'react';
import UopLogo from '../../assets/uoplogo.png';
import { MainNavData } from './NavData';
import { Link, useLocation } from 'react-router-dom';

const MainNav = ({ isAtTop }) => {
    const location = useLocation();

    const isHome = location.pathname === '/';
    const bgColor = isHome
        ? (isAtTop ? 'bg-[rgba(0,0,0,0.3)]' : 'bg-[#560606]')
        : 'bg-[#560606]';
    const paddingY = isAtTop ? 'py-4' : 'py-2';

    return (
        <nav
            className={`xl:px-20 px-6 transition-all duration-300 text-white backdrop-blur-md ${paddingY} ${bgColor}`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" aria-label="University of Peradeniya Home">
                    <img
                        src={UopLogo}
                        alt="University of Peradeniya Logo"
                        className={`w-auto transition-all duration-300 ${isAtTop ? 'xl:h-20 h-12' : 'xl:h-14 h-8'
                            }`}
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden xl:flex space-x-8 font-semibold uppercase tracking-wide">
                    {MainNavData.map(({ id, name, link }) => (
                        <Link
                            key={id}
                            to={link}
                            className={`hover:text-yellow-400 transition-colors duration-200 ${location.pathname === link ? 'text-yellow-400' : ''
                                }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MainNav;

import React from 'react';
import UopLogo from '../../assets/uoplogo.png';
import { MainNavData } from './NavData';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav className="xl:px-20 px-6 py-4  bg-[rgba(0,0,0,0.3)] text-white backdrop-blur-md">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" aria-label="University of Peradeniya Home">
                    <img src={UopLogo} alt="University of Peradeniya Logo" className="xl:h-20 h-12 w-auto" />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden xl:flex space-x-8 font-semibold text-white uppercase tracking-wide">
                    {MainNavData.map(({ id, name, link }) => (
                        <Link
                            key={id}
                            to={link}
                            className="hover:text-yellow-400 transition-colors duration-200"
                            aria-current={window.location.pathname === link ? 'page' : undefined}
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

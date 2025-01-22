'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavLinks from '@/app/SystemDesign/Molecules/NavLink';
import { navLinks } from '@/constants/navigation-link';
import CloseIcon from '@/app/SystemDesign/Icons/Close';
import MenuIcon from '@/app/SystemDesign/Icons/Hamburger';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the threshold when the navbar background should change
      const threshold = 10;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isScrolled ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 w-full p-4 z-20 transition-colors duration-300`}>
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={isScrolled ? '/images/logo-horizontal-colored.png' : '/images/logo-horizontal.png'}
            alt="Logo"
            width={isScrolled ? 150 : 150}
            height={40}
          />
        </div>

        <div className="md:hidden">
          <button className="text-blue-600 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <NavLinks links={navLinks} isScrolled={isScrolled} />
        </div>

        <div className="hidden md:block">
          <button
            className={`${isScrolled ? 'bg-blue-600' : 'bg-white'} font-bold ${isScrolled ? 'text-white' : 'text-blue-600'} px-4 py-2 rounded-md hover:bg-gray-100 transition`}>
            문의하기
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full z-10">
          <div className="container max-w-7xl mx-auto p-4">
            <NavLinks links={navLinks} />
            <div className="mt-4">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition">
                문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

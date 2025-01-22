'use client';
import React, { useState } from 'react';
import ChevronDown from '@/app/SystemDesign/Icons/ChevronDown';
interface NavLink {
  name: string;
  href: string;
  children?: NavLink[];
}

interface NavLinksProps {
  links: NavLink[];
  isScrolled?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, isScrolled }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <ul className="flex flex-col md:flex-row md:space-x-8">
      {links.map((link) => (
        <li key={link.name} className="relative group">
          <button
            onClick={() => handleToggleDropdown(link.name)}
            className={`font-bold text-black md:${isScrolled ? 'text-black' : 'text-white'} block py-2 flex items-center`}>
            {link.name}
            {link.children && <ChevronDown />}
          </button>

          {link.children && (
            <ul
              className={`${openDropdown === link.name ? 'block' : 'hidden'
                } md:block md:absolute md:left-0 md:w-80 md:py-2 md:space-y-2 md:bg-white md:border md:border-gray-200 md:rounded-lg md:shadow-lg md:hidden md:group-hover:block z-20`}>
              {link.children.map((child) => (
                <li key={child.name} className="px-2">
                  <a
                    href={child.href}
                    className="block px-4 py-2 text-gray-800 rounded-md hover:bg-blue-200 hover:text-blue-600 transition duration-150">
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

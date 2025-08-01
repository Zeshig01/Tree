'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#3D5B4B]/90 border-b border-[#3D5B4B] backdrop-blur-md text-white py-4 px-6 shadow-md">
      <div className="w-[85%] mx-auto flex items-center justify-between">

        <nav className="flex items-center gap-8 text-sm font-medium">

          
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About Family</a>
          <a href="#" className="hover:text-white transition">Family News</a>
          
          {/* Center Logo */}
          <Image
            src="/tree.png" // replace with your actual logo file path
            alt="Logo"
            width={40}
            height={40}
            className="mx-2"
          />

          
          <a href="#" className="hover:text-white transition">Library</a>
          <a href="#" className="hover:text-white transition">Family Map</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>

        </nav>
        <div className="flex items-center gap-2 bg-[#758A7F] backdrop-blur-md text-white px-3 py-1 rounded-md text-sm cursor-pointer">
          <span className="text-xs">🌐</span>
          <span className="font-semibold">EN</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

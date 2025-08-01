'use client';

import Image from 'next/image';
import { FaInstagram, FaSnapchatGhost, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#446c4a] text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* Column 1: Tree Info */}
        <div>
          <Image
            src="/tree.png"
            alt="Family Tree"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="font-semibold mb-2">The family tree connects generations</h3>
          <p>
            This section contains example text where you can introduce your legacy and values
            across generations.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About the Family</a></li>
            <li><a href="#" className="hover:underline">Library</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="mb-4">
            You can easily reach us through any social media platform.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaSnapchatGhost /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-xs">
        © 2025 All rights reserved. Designed by YourSite
      </div>
    </footer>
  );
};

export default Footer;

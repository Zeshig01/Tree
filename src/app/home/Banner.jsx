'use client';

import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative w-full h-[400px]">
     <Image
        src="/saudi.jpg"
        alt="Saudi Banner"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <div className="absolute inset-0 bg-[#3D5B4B]/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome</h1>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:underline text-white/90">Home</Link>
          <span>|</span>
          <Link href="/about" className="hover:underline text-white/90">About</Link>

        </nav>
      </div>
    </div>
  );
};

export default Banner;

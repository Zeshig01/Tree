
'use client';

import Image from 'next/image';
import React from 'react';

const Section = () => {
  return (
    <div className='bg-[#DDDAD2] mb-20'>

    <section className="max-w-7xl  mx-auto px-4 py-6 grid md:grid-cols-2 gap-8 items-center">
      {/* Left Image Block */}
     

      {/* Right Text Block */}
      <div className="text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Family Name</h2>
        <p className="text-base leading-7 mb-4">
          This text is a placeholder and can be replaced with your actual family introduction. It explains your history, values, and vision across generations.
        </p>
        <p className="text-base leading-7 mb-4">
          Add more paragraphs as needed to tell your story. The layout is responsive and ensures your message is well presented on all screen sizes.
        </p>
        <p className="text-base leading-7">
          Feel free to add more details or make this section multilingual. This part of the website helps visitors understand the essence of your family heritage.
        </p>
      </div>

       <div className="relative w-full">
        {/* Main Image */}
        <Image
          src="/sndTree.png"
          alt="About Family"
          width={600}
          height={600}
          className="rounded-xl"
        />


       
      </div>
    </section>
    </div>
  );
};

export default Section;

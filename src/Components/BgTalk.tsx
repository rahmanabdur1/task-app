import React from 'react';
import Image from 'next/image';

const BgTalk = () => {
    return (
        <div className='flex flex-col md:flex-row items-center'>
           <div className='flex flex-col items-start w-[393px] md:ml-[345px] sm:ml-[50px] md:mt-[172px] sm:-[91px] h-[163px] justify-between'>
                <h3 className='font-figtree text-white'>let&apos;s talk</h3>
                <p className='font-montserrat text-white'>Do you have some questions? Want to grab a coffee? Plan a call with the button below</p>
                <button className='w-[204px] h-[47px] bg-[rgba(0,150,251,1)] rounded-[12px] font-poppins-medium text-white'>Book a Consultancy</button>
            </div>

            <div className="relative w-full md:w-[408px] h-[auto] md:mt-[95px] sm:-[30px]">
                <Image 
                    src="/leftpic.png" 
                    alt="Hero Image" 
                    layout="responsive"  // Use responsive layout for better scaling
                    width={408}          // Set the fixed width here
                    height={503}         // You can adjust height based on your design
                    objectFit="cover"    // Optional: to maintain aspect ratio while covering the area
                />
            </div>
        </div>
    );
};

export default BgTalk;

import { proceeds } from '@/data';
import React from 'react';

const Proceed = () => {
    return (
        <div className='max-w-[1122px]  mx-auto mt-[169px]'>
            <h2 className="text-2xl font-figtree text-center text-white">How do we proceed</h2>
            <div className='flex justify-between pt-[66px] sm:flex-row flex-col '>
                {proceeds.map((service) => (
                    <div key={service.id} className="mx-auto bg-[rgba(0,14,31,1)] rounded-[20px] w-[270px] h-[229px] mt-[23px]  pt-[30px] pl-[32px]">
                        <span className="bg-[rgba(0,150,251,1)] font-exo2 text-white w-[44px] h-[44px] rounded-full flex items-center justify-center">
                            {service.id}
                        </span>

                        <h3 className="fontFigtree text-white w-[161px] pt-[17px]">{service.title}</h3>
                        <p className="font-montserrat-small pt-[17px] text-white">{service.des}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Proceed;
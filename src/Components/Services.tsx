import { services } from "@/data"; // Adjust the import path as necessary

const Services = () => {
    return (
        <div className="max-w-[855px] h-[695px] mx-auto flex flex-col justify-center items-center">
            {/* Header Section */}
            <div className="text-center">
                <h2 className="font-figtree text-white">Services Offered</h2>
                <p className="text-white w-[434px] pt-[24px] font-montserrat">
                    We help solve clients&apos; problems and develop high-quality products.
                </p>
            </div>

            {/* Services List Section */}
            <div className="flex flex-wrap justify-center pt-[64px] gap-9 w-full">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className="bg-[rgba(0,14,31,1)] w-[409px] h-[247px] rounded-[15px] shadow-lg"
                    >
                        {/* Service Image */}
                        <div className="flex pl-[35px]">
                            <div 
                                className="pt-[64px]"
                                dangerouslySetInnerHTML={{ __html: service.img }}
                            />   
                            <ul className="pl-[25px] pt-[62px]">
                                {service.options.map((option, index) => (
                                    <li key={index} className="font-poppins text-white flex gap-[4px] items-center">
                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                            <path d="M1 1L6 6L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        {option.title}
                                    </li>
                                ))}
                            </ul>                   
                        </div>
                        {/* Service Options List */}
                     
                        <h3 className="pl-[35px] pt-[18px] fontFigtree text-white">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

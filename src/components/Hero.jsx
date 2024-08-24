import React from 'react';
import img1 from "../assets/img1.webp";
import { GoArrowUpRight } from 'react-icons/go';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Hero = () => {
    return (
        <>
            <div className="hero  max-h-[605px] bg-[#245D51]">
                <div className="hero-content text-start text-white">
                    <div className="flex justify-between p-12">
                        {/* left */}
                        <div className='lg:w-1/2'>
                            <div className=''>
                                <h1 className="mb-5 text-6xl font-bold leading-normal">There is always something new for us to learn</h1>
                                <p className="mb-5 text-lg">
                                    we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.
                                </p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className="btn bg-orange-500 btn-ghost">
                                    Start Journey
                                    <GoArrowUpRight size={16} />
                                </button>
                                <PiInstagramLogoFill size={30} />
                                <FaTwitter size={30} />
                                <FaDiscord size={30} />
                            </div>
                        </div>

                        {/* right */}
                        <div className='hidden lg:relative '>
                            <img src={img1} alt="girl with confident look" c
                            lassName='h-[541px] absolute top-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Topics from '../components/Topics';
import coverImage from '../public/images/logo.png';

const Academy = () => {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // This is an example of how you can generate the video URL dynamically
    const videoId = 'azhzBF--Gw4';
    const videoSrc = `https://www.youtube.com/embed/${videoId}?rel=0&controls=1&disablekb=1&iv_load_policy=3&modestbranding=1`;
    setVideoSrc(videoSrc);
  }, []);

  return (
    <div className='bg-background min-h-screen'>
        <div className=' text-center mt-5'>
            <h1 className="lg:text-4xl text-2xl font-bold academy-header mb-4">Here&apos;s your attention getting headline</h1>
            <h2 className="lg:text-xl text-lg font-medium academy-header mb-8">Here&apos;s your attention getting sub headline</h2>
        </div>
        <div className='lg:flex block'>
            {videoSrc && (
                <div className="relative w-full px-3" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                        src={videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute rounded-lg inset-0 w-full lg:h-3/5 h-full"
                    />
                </div>
            )}
            <div className='border border-border-primary bg-white lg:mx-4 h-full lg:w-3/5 w-full'>
               <div className='border-b-2 border-border-primary p-5'>
                    <Timer/>
               </div>
               <div className='p-5'>
                    <input type="text" className='py-3 md:mb-0 mb-3 px-4 outline-none w-full rounded-md border border-border-primary' placeholder="Full Name" />
                    <input type="text" className='py-3 md:my-3 mb-3 px-4 outline-none w-full rounded-md border border-border-primary' placeholder="Email Address" />
                    {/* <input type="number" className='py-3 md:mb-3 mb-3 px-4 outline-none w-full rounded-md border border-border-primary' placeholder="Phone Number" />
                    <input type="text" className='py-3 md:mb-0 mb-3 px-4 outline-none w-full rounded-md border border-border-primary' placeholder="City" /> */}
                    <button className='cta-button-1 text-3xl mt-4 font-bold'>Special OFFER Click Here <br /> <span className='text-lg font-thin'>I want this special offer now</span></button>
               </div>
            </div>
        </div>
        <div className='xl:-mt-64 mt-10 mx-auto text-center'>
            <h2 className="lg:text-4xl text-2xl font-bold academy-header mx-2 mb-4">Learn from EXPERTS: <span className='underline'>Follow who know road</span></h2>
            <p className='lg:text-2xl text-xl lg:mx-32 mx-3 font-thin mt-3'>Our team of experts are people who are really good at what they love to do. They will teach you how to focus on one thing and get really good at it too. With our online courses, you will learn from the best and get the skills you need to be great at what you want to do.</p>
        </div>
        <div className='lg:mx-12 mx-3 mt-12'>
            <Topics/>
        </div>
    </div>
  );
}

export default Academy;

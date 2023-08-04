import Image from 'next/image'
import MASTHEAD_DATA from '../../data/mastheadData'
import { useState, useEffect } from 'react';
 
export default function HeroVideo() {

    return (
        <div className="relative hero-video flex items-end justify-center h-[600px] md:h-[768px] overflow-hidden">
           <video src={MASTHEAD_DATA.item.videoSrcMobile}
                autoPlay={true} 
                poster={MASTHEAD_DATA.item.poster}
                loop={true}
                playsInline={true}
                muted
                className="z-0 object-cover
                min-w-full w-screen h-full md:h-full max-w-none">
            </video> 
            <div className='absolute z-10 md:h-64'>
                <Image className=' border-0 drop-shadow-md pb-10 cursor-pointer w-[300px] md:w-[400px] mx-auto ' alt='Valtech' src={MASTHEAD_DATA.item.logoSrc} width={763} height={467}></Image>
            </div>
        </div>
    )
}
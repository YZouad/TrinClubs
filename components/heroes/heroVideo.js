import Image from 'next/image'
import MASTHEAD_DATA from '../../data/mastheadData'
import { useState, useEffect } from 'react';
 
export default function HeroVideo(props) {

    return (
        <div className="relative hero-video flex items-start justify-center h-[600px] md:h-screen overflow-hidden">
             <div className='bg-darkBlue w-full absolute h-full z-10 opacity-90'></div>
           <video src={props.src}
                autoPlay={true} 
                poster=""
                loop={true}
                playsInline={true}
                muted
                className="z-0 object-cover
                h-full">
            </video> 
            
        </div>
    )
}
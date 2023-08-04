/* This example requires Tailwind CSS v3.0+ */
import Image from 'next/image';
 

export default function HeroSimple() {
  return (
        <section className="hero hero-default mt-40 md:mt-10 relative px-6 lg:px-8 flex items-center justify-center h-[300px] md:min-h-[550px]">
          <div className="mx-auto max-w-2xl">
            <div className="flex justify-center ">
              <Image className='rounded-full' src="/img/valtech-icon.jpg" alt="" width={200} height={200}/>
              </div>
            <div className="text-center ">
              <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               <span className='quote-icon text-6xl sm:text-8xl'>NYC Internship 2023</span>
              </div>
              <p className='mt-5'>NextJS starter kit with tailwind CSS and TailwindUI starter components</p>
            </div>
          </div>
          
        </section>
  )
}

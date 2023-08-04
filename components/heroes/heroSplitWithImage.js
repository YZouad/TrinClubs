/* This example requires Tailwind CSS v3.0+ */
import Image from 'next/image';
import Button from '../layout/buttons/Button';

export default function HeroSplitWithImage() {
  return (
    <section className="hero hero-spilt-with-image relative bg-white container mx-auto">
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
        <div className="mx-auto max-w-2xl lg:mx-0">
        
          <h2 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
           Headline
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Sample text
          </p>
          <div className="mt-10 flex items-center gap-x-6">
                <Button link="/">
                  <span>Get Started</span>
                </Button> 
            <a href="#" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <img
          className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    </div>
  </section>
  )
}
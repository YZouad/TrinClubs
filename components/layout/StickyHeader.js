import { useState, useContext, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, UserIcon, DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
 
import navigationData from '../../data/navigationData';
import COMPANY_DATA from '../../data/company';

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  

  
  
const StickyHeader = (props) => {
   
    return (
      <>
       <Disclosure as="nav" className="bg-black w-full z-30">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-mrhYellow hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  flex-1 items-center justify-center  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <Link href='/'>
                    <img
                        className="block h-12 w-auto lg:hidden hover:animate-pulse"
                        src="/img/valtech-icon.jpg"
                        alt="Valtech"
                    />
                    <img
                        className="hidden h-12 w-auto hover:animate-pulse lg:block"
                        src="/img/valtech-icon.jpg"
                        alt="Valtech"
                    />
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationData.map((item) => (
                      <a
                        key={item.name}
                        href={item.id}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white cursor-pointer' : 'cursor-pointer text-gray-300 hover:bg-mrhYellow hover:text-white',
                          'px-3 py-2 rounded-md text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationData.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.id}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-mrhYellow hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
      
      </>
    );
}
  
export default StickyHeader;







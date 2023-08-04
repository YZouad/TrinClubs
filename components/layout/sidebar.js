import {
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    Bars3Icon, XMarkIcon 
} from '@heroicons/react/24/outline'
 
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { set } from 'react-hook-form'
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
    { name: 'Members', href: '/members', icon: UsersIcon, count: '6', current: false },
    { name: 'Clubs', href: '/clubs', icon: FolderIcon, count: '4', current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SideBar(props) {

    const clubs = props.clubInfo
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false)
    
    useEffect(() => {
      let isDesktop = window.innerWidth >= 768 ? true : false;
      if (isDesktop) {
        setSidebarOpen(true)
      }
        window.addEventListener('resize', function(event){
            isDesktop = window.innerWidth >= 768 ? true : false;
            //console.log('isMobile', isMobile)
            if (isDesktop) {
              setSidebarOpen(true);
            } else {
              setSidebarOpen(false);
            }
        });
       
    }, [])

    function openSideBarHandler(e) {
      e.preventDefault();
      setSidebarOpen(value => !value);
    }

    return (
      <div className='relative w-full'>
       <div onClick={openSideBarHandler} className="absolute md:hidden w-full left-0 z-50 inline-flex items-left justify-start rounded-md p-4 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Open main menu</span>
          {sidebarOpen ? (
            <XMarkIcon className="block close h-10 w-10" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block open h-10 w-10" aria-hidden="true" />
          )}
        </div>
       { sidebarOpen && 
        <div className=' w-full h-full flex-col relative'>
        <div className="flex grow h-screen flex-col gap-y-5 overflow-y-auto px-6 pb-6">
   <div className="flex justify-center my-3 items-center z-30">
     <Link href="/"><img className="w-[200px]" src="/img/TrinityWhiteLogo.png" alt="Trinity Club Web App" /></Link>
   </div>
   <nav className="flex flex-1 flex-col z-30">
     <ul role="list" className="flex flex-1 flex-col gap-y-4 ">
     <li className="-mx-6">
         <a
           href="#"
           className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
         >
           <img
             className="h-8 w-8 rounded-full bg-indigo-700"
             src="/img/me.jpg"
             alt=""
           />
           <span className="sr-only">Your profile</span>
           <span aria-hidden="true">Yanis Zouad</span>
         </a>
       </li>
       <li>
         <ul role="list" className="-mx-2 space-y-1">
           {navigation.map((item) => (
             <li key={item.name}>
               <a
                 href={item.href}
                 className={classNames(
                  router.pathname === item.href
                     ? 'bg-indigo-700 text-white'
                     : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                   'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                 )}
               >
                 <item.icon
                   className={classNames(
                     item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                     'h-6 w-6 shrink-0'
                   )}
                   aria-hidden="true"
                 />
                 {item.name}
                 {item.count ? (
                   <span
                     className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
                     aria-hidden="true"
                   >
                     {item.count}
                   </span>
                 ) : null}
               </a>
             </li>
           ))}
         </ul>
       </li>
       <li>
         <div className="text-md font-semibold leading-6 text-indigo-200">Clubs</div>
         <ul role="list" className="-mx-2 mt-2 space-y-1 text-xs">
           {clubs.map((team) => (
             <li key={team.slug}>
               <a
                 href={`../clubs/${team.slug}`}
                 className={classNames(
                  window.location.href.includes(team.slug)
                     ? 'bg-indigo-700 text-white'
                     : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                   'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                 )}
               >
                 {/* <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                   {team.initial}
                 </span> */}
                 <span className="truncate">{team.title}</span>
               </a>
             </li>
           ))}
         </ul>
       </li>
    
     </ul>
   </nav>
 </div>
        </div>
       }
      

      </div>
       
     
    )
  }
  
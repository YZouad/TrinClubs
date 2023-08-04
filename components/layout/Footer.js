import Image from 'next/image';
import { DevicePhoneMobileIcon} from '@heroicons/react/24/outline'
import COMPANY_DATA from '../../data/company';
import { date } from 'yup';

const phone = 'tel:'+ COMPANY_DATA.item.phone;
const today =  new Date();
const copyRightyear = today.getFullYear();

 
  export default function Footer() {
    return (
      <footer className="bg-black" aria-labelledby="footer-heading">
         
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
         
          <div className="mt-16 justify-center border-t border-white/10 pt-8 sm:mt-20">
          <img className='drop-shadow-md h-60 md:h-[80px] mx-auto hover:animate-pulse ' alt='' src="/img/valtech-icon.jpg"></img>
           
        </div>
        </div>
      </footer>
    )
  }
  
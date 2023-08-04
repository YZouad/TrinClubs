import Image from 'next/image';
import { DevicePhoneMobileIcon} from '@heroicons/react/24/outline'
import COMPANY_DATA from '../../data/company';
import { date } from 'yup';

const phone = 'tel:'+ COMPANY_DATA.item.phone;
const today =  new Date();
const copyRightyear = today.getFullYear();


 
  export default function Footer(props) {
    const footerContactList = props.footerInfo.filter(item => item.groupType === 'footer-contact-list')
    const footerHelpList = props.footerInfo.filter(item => item.groupType === 'footer-help-list')

    console.log('props footer only help', footerHelpList)
    return (
      <footer
        className="w-full px-4 bg-darkBlue text-center text-neutral-100 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div className="mx-auto max-w-2xl py-10 text-center md:text-left">
          <div className="grid-1 grid gap-20 md:grid-cols-2 lg:grid-cols-2">
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful Links
              </h6>
              {footerHelpList.map((footer) => (   
                <div key={footer.sys.id} className="mb-4 flex items-center justify-center md:justify-start">
                    {footer.linkType  == 'url' && 
                    <a className='flex' href={footer.url}>
                    {footer.useIcon && <div dangerouslySetInnerHTML={{__html: footer.svg}} />}
                    {footer.label}
                    </a>
                   }
                </div>
              ))}
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              {footerContactList.map((footer) => (   
                <div key={footer.sys.id} className="mb-4 flex items-center justify-center md:justify-start">
                   {footer.linkType  == 'phone' && 
                    <a className='flex' href={'tel:'+footer.url}>
                    {footer.useIcon && <div className='h-2 mr-3 object-cover' dangerouslySetInnerHTML={{__html: footer.svg}} />}
                    {footer.label}
                    </a>
                   }
                    {footer.linkType  == 'email' && 
                    <a className='flex' href={'mailTo:'+footer.url}>
                    {footer.useIcon && <div dangerouslySetInnerHTML={{__html: footer.svg}} />}
                    {footer.label}
                    </a>
                   }
                    {footer.linkType  == 'url' && 
                    <a className='flex' href={footer.url}>
                    {footer.useIcon && <div dangerouslySetInnerHTML={{__html: footer.svg}} />}
                    {footer.label}
                    </a>
                   }
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
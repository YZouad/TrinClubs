import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
 

const ContactCard = ({persons}) => {
  
  console.log('Persons', persons);
  return (
    <div className=''>
       <ul role="list" className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {persons.map((person) => (
        <li
          key={person.slug}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <Link href={'/members/' + person.fields.slug}>
            <img className="mx-auto h-32 w-32 flex-shrink-0 object-cover rounded-full" src={'https://'+person.fields.image.fields.file.url} alt=""></img>
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.fields.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.fields.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
              {person.fields.titles.map(title => (
                <div className="mb-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  <div>
                    {title}
                  </div>
                </div>
                 ))}
              </dd>
            </dl>
            </Link>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.fields.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.fields.phone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </div>
          
        </li>
      ))}
    </ul>
    </div>
   
  )
}
export default ContactCard;
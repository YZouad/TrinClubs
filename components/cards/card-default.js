import classes from  './card-default.module.css'; 

import Image from 'next/image';

  export default function CardDefault({club}) {
    const { title, cardType, clubImage, slug} = club.fields;

    console.log('slug', slug)
    console.log('club', club.metadata.tags)
    const linkPath = `/clubs/${slug}`;

    
    return (
     
        <div className="card-default flex flex-col mx-2 rounded-lg shadow-lg mb-5 bg-white hover:bg-gray-100">
           <a href={linkPath} className=" hover:underline"> 
          <div className="w-[425px]">
            <img className="h-64 object-cover overflow-hidden w-full" src={'https://'+clubImage.fields.file.url} alt=""></img>
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="flex-1">
              <p className="title font-bold mb-2">
                {title}
              </p>
              {club.metadata.tags.map((tags) => (
                <div className="mb-2 mr-2 inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  <p>
                    {tags.sys.id} 
                  </p>
                </div>
              ))}
                {/* <div className="mt-3 text-base text-gray-500">{item.fields.richText}</div> */}
            </div>
             
          </div>
          </a>
        </div>
       
    )
  }
  
import classes from  './card-default.module.css'; 

import Image from 'next/image';

  export default function CardDefault({post}) {
    const { title, cardType, heroImg, slug} = post.fields;

    console.log('slug', slug)
    
    const linkPath = `/posts/${slug}`;

    const isCardTypePost = (cardType === 'post') ? true : false;
    return (
     
        <div className="card-default flex flex-col overflow-hidden rounded-lg shadow-lg ml-5">
           <a href={linkPath} className=" hover:underline"> 
          <div className="flex-shrink-0">
            <Image className="h-64 object-cover overflow-hidden" src={'https://'+heroImg.fields.file.url} alt=""  width={500} height={500}></Image>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="title">
                  {title}
              </p>
                {/* <div className="mt-3 text-base text-gray-500">{item.fields.richText}</div> */}
            </div>
             
          </div>
          </a>
        </div>
       
    )
  }
  
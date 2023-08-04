 
import CtaSimpleCentered from "../../components/cta-sections/simple-center";
import Image from 'next/image';
import { createClient } from "contentful";

 
 
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_API,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
  })

  const res = await client.getEntries({content_type: 'person' })

  return {
    props: {
      members: res.items
    }
  }
}

const AllMembersPage = ({members}) => {
    
    return (
      <>
      <CtaSimpleCentered>
          <h1 className="my-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> 
            All Members
          </h1>
      </CtaSimpleCentered>
      <div className=" max-w-6xl mx-auto flex flex-wrap justify-center ">
        {members.map(member => (
             <div key={member.fields.slug} className="card-default flex flex-col overflow-hidden rounded-lg shadow-lg mb-5 ml-0 md:ml-5 hover:bg-gray-100">
             <a href={'/members/' + member.fields.slug}> 
            <div className="flex-shrink-0 w-full md:w-[300px]">
              <img className="h-64 object-cover overflow-hidden" src={'https://'+member.fields.image.fields.file.url} alt=""></img>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <p className="title font-bold">
                    {member.fields.name}
                </p>
                {member.fields.titles.map(title => (
                <div key={title} className = "text-sm">
                  {title}
                </div>
                ))}
                 
              </div>
               
            </div>
            </a>
          </div>
        ))}
        </div>
      </>
    );
}
  
export default AllMembersPage;
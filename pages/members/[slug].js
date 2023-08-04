 
import Head from "next/head"
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

 
const client = createClient({
  space: process.env.CONTENTFUL_API,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
})

export const getStaticPaths = async () => {
  const members = await client.getEntries({
    content_type: 'person'
  })

   
  const paths = members.items.map(item => {
    return {
      params: {slug:item.fields.slug }
    }
  })

  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {

  const { items } = await client.getEntries({
    content_type: 'person',
    'fields.slug': params.slug
  })


  const data = {
    person: items[0],
  } 

  return {
    props: { 
      data: data,
    }
  }
}

const MemberDetailPage = ({data}) => {

    console.log('members data',data)
    return (
      <> 
      <Head>
        <title> {data.person.fields.name}</title>
        <meta name="description" content="" />
      </Head>
      <div className="">
        <section className="mb-32">
         <div className="">
         <img src={'https://'+data.person.fields.image.fields.file.url}
                className="mb-6 w-full object-cover object-center h-[400px] md:h-[550px] overflow-hidden" alt={data.person.fields.name} />
          </div> 
          <div className="my-24 mx-auto md:px-6 max-w-4xl">
            <div className="w-full shrink-0 grow-0 basis-auto md:w-2/12 lg:w-3/12">
            
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto text-center md:w-10/12 md:pl-6 md:text-left lg:w-9/12">
              <h5 className="mb-3 text-4xl font-semibold">{data.person.fields.name}</h5>
              <div className="mb-2 text-sm font-semibold">
                {data.person.fields.titles.map(title => (
                <div key={title}>
                  {title}
                </div>
                ))}
              </div>
              <div>
              {documentToReactComponents(data.person.fields.richContent)}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      </>
    );
}
  
export default MemberDetailPage;
import PostDetailContent from "../../components/post/post-detail";
import Head from "next/head"
import { createClient } from "contentful";
import ContactCard from "../../components/club/contact-cards";
import CtaSimpleCentered from "../../components/cta-sections/simple-center";

const client = createClient({
  space: process.env.CONTENTFUL_API,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
})

export const getStaticPaths = async () => {
  const clubs = await client.getEntries({
    content_type: 'clubDirectoryPage'
  })

  const paths = clubs.items.map(item => {
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
    content_type: 'clubDirectoryPage',
    'fields.slug': params.slug
  })

  const data = {
    club: items[0]
  } 



  return {
    props: { 
      data: data,
    }
  }
}

const ClubDetailPage = ({data}) => {
  
  //console.log('data',data)
    return (
      <> 
      <Head>
        <title> {data.club.fields.title}</title>
        <meta name="description" content="" />
      </Head>
      <PostDetailContent item={data.club}></PostDetailContent>
      <CtaSimpleCentered>
    
      
      <ContactCard persons={data.club.fields.members}></ContactCard>
      </CtaSimpleCentered>
   
    
      </>
    );
}
  
export default ClubDetailPage;
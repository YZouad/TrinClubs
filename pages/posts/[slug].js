import PostDetailContent from "../../components/post/post-detail";
import Head from "next/head"
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_API,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'landing'
  })

  const paths = res.items.map(item => {
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
    content_type: 'landing',
    'fields.slug': params.slug
  })
  return {
    props: { 
      post: items[0]
    }
  }
}

const PostDetailPage = ({post}) => {
    
    return (
      <> 
      <Head>
        <title> {post.fields.title}</title>
        <meta name="description" content="" />
      </Head>
      <PostDetailContent item={post}></PostDetailContent>
      </>
    );
}
  
export default PostDetailPage;
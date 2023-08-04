import CardDefault from "../../components/cards/card-default";
import CtaSimpleCentered from "../../components/cta-sections/simple-center";
import Button from "../../components/layout/buttons/Button";
import FlexGrid from "../../components/layout/Grids/flex-grid";
import { createClient } from "contentful";

 
 
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_API,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY, 
  })

  const res = await client.getEntries({content_type: 'landing' })
  return {
    props: {
      posts: res.items
    }
  }
}

const AllPostsPage = ({posts}) => {
  
    return (
      <>
      <CtaSimpleCentered>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> 
            All Contenful Posts
          </h1>
      </CtaSimpleCentered>
      <div className=" max-w-4xl flex justify-center ">
        {posts.map(post => (
            <CardDefault key={post.sys.id} post={post} cardType="post"/> 
        ))}
        </div>
      </>
    );
}
  
export default AllPostsPage;




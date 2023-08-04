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

  const res = await client.getEntries({content_type: 'clubDirectoryPage' })
  return {
    props: {
      clubs: res.items
    }
  }
}

const AllPostsPage = ({clubs}) => {
    console.log('LOOK HERE ', clubs.contentfulMetadata)
    return (
      <>
      <CtaSimpleCentered>
          <h1 className="my-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> 
           Clubs
          </h1>
      </CtaSimpleCentered>
      <div className=" max-w-6xl mx-auto flex flex-wrap justify-center "> 
        {clubs.map(club => (
            <CardDefault key={club.sys.id} club={club} cardType="post"/> 
        ))}
        </div>
      </>
    );
}
  
export default AllPostsPage;




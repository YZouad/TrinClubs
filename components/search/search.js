import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import CustomSearchBox from "./custom-search-box";
import CustomHits from "./custom-hits";

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  );

export default function Search() {
    return (
       <>
       <div className="mx-auto relative flex flex-col justify-center max-w-2xl w-full">
       <div className="h-20 text-white flex justify-center text-2xl md:text-4xl">Trinity Clubs: Discover, Connect, Grow</div>
          <InstantSearch 
            searchClient={searchClient} 
            indexName="TrinLabs">
              <div className="h-20">
              <CustomSearchBox></CustomSearchBox>
              </div>
              <div className="">
              <CustomHits></CustomHits>
              </div>
          
          </InstantSearch>
       </div>
      
       </>
    )
  }
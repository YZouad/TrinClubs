// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  console.log('searchResults', searchResults)

  return (
    <>
      <div className="text-white mt-2 absolute"> 
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID}>
              <Link href={`/clubs/${hit.slug}`}>{hit.title}</Link>
              <Link href={`/members/${hit.slug}`}>{hit.name}</Link>
               {hit.media.image ? ( <img className="h-20 mt-2 rounded-lg" src={`${hit.media.image}`}></img>)
              : <img className="h-20 mt-2 rounded-lg" src={`${hit.media.clubImage}`}></img>
              }
            </li>
          ))}
        </ol>
      )}
      </div>
    </>
  );
}

export default connectStateResults(Hits);
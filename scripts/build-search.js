
// build-search.js
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");


//These need to come from env.process to be more secure
const CONTENTFUL_API='w33z9x9hbigo'
const CONTENTFUL_ACCESS_KEY='-YZPYq6xBQAEbnyz7gjCdyrSIq_Ck2uxUQsf6frpgjc'

const NEXT_PUBLIC_ALGOLIA_APP_ID= 'CVD92LB8WU'
const ALGOLIA_SEARCH_ADMIN_KEY= '76bf012bd1574a933f61eae7826d72b7'
 
 

async function getAllClubs() {

  const query = ` 
      query {
        clubDirectoryPageCollection {
            items {
              sys {
                id  
              },
              contentfulMetadata {
                tags {
                  id
                }
              }
              title, 
              slug,
              clubImage {
                url
              }
            }
          },
          personCollection {
            items {
              sys {
                id
              },
              name, 
              slug,
              image {
                url
              }
            }
          } 
      }
  `;
   
    try {
        const data = await fetch(
       
          'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_API,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + CONTENTFUL_ACCESS_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            //body: JSON.stringify(),
          },
        ).then((response) => response.json());

    
        return data;
      } catch (error) {
        throw new Error(error);
      }
      
}

function transformClubsToSearchObjects(clubs, persons) {

   let combineSearchObjects = {};

    const transformedClubs = clubs.map((club) => {
      return {
        objectID: club.sys.id,
        title: club.title,
        slug: club.slug,
        media: {clubImage: club.clubImage.url},
        tagsCollection: {tags: club.contentfulMetadata.tags }
      };
    });


    const transformedPersons = persons.map((person) => {
      return {
        objectID: person.sys.id,
        name: person.name,
        slug: person.slug,
        media: {image: person.image.url}
      };
    });

    combineSearchObjects.clubs = transformedClubs;
    combineSearchObjects.persons = transformedPersons;

    console.log('combineSearchObjects',combineSearchObjects)
  
    return combineSearchObjects;
} 

(async function () {
  dotenv.config();

  try {
    const response = await getAllClubs();

    const clubs = response.data.clubDirectoryPageCollection.items
    ? response.data.clubDirectoryPageCollection.items
    : [];

    const persons = response.data.personCollection.items
    ? response.data.personCollection.items
    : [];

  

    transformed = transformClubsToSearchObjects(clubs, persons);
    //console.log('transformed',transformed)
 
     
    //initialize the client with your environment variables
    const client = algoliasearch(
       NEXT_PUBLIC_ALGOLIA_APP_ID,
       ALGOLIA_SEARCH_ADMIN_KEY,
     );

     //initialize the index with your index name
     const index = client.initIndex("TrinLabs");

     // save the objects!
     const algoliaClubResponse = await index.saveObjects(transformed.clubs);
     const algoliaPersonResponse = await index.saveObjects(transformed.persons);

     // check the output of the response in the console

     console.log(
      `🎉 Sucessfully added ${algoliaClubResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaClubResponse.objectIDs.join(
        "\n",
      )}`,
    );

     console.log(
       `🎉 Sucessfully added ${algoliaPersonResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaPersonResponse.objectIDs.join(
         "\n",
       )}`,
     );

     
  } catch (error) {
    console.log(error);
  }
})();
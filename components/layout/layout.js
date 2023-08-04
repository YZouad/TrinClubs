import { Fragment, useContext, useState, useEffect } from "react"
import Footer from "./Footer";
import { useRouter } from "next/router";
import StickyHeader from "./StickyHeader";
import GlobalSiteProvider from "../../store/global-context";
import Script from 'next/script'
import SideBar from "./sidebar";
 
const Layout = (props) => {
   

  const router = useRouter(); 
  const headerGradient = router.pathname === '/' ? '' : '';
  const [clubInfo, setClubInfo] = useState([]);
  const [footerInfo, setFooterInfo] = useState([]);

    useEffect(() => { // useEffect hook
      const query = ` 
      query {
        listCollection { 
          items {
            sys {
              id
            }
           label,
           useIcon,
           linkType, 
           svg,
            url,
             groupType
          }
        },
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
              slug
            }
          }
        }
      `;

      const getData = async() => {
        const graphpQlData = await fetch('https://graphql.contentful.com/content/v1/spaces/' + process.env.CONTENTFUL_API,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
          },
        ).then((response) => response.json());

        console.log('graphQL', graphpQlData)

        const clubs = graphpQlData.data.clubDirectoryPageCollection.items
        ? graphpQlData.data.clubDirectoryPageCollection.items
        : [];
        setClubInfo(clubs)
         
        const footerInfo = graphpQlData.data.listCollection.items
        ? graphpQlData.data.listCollection.items
        : [];
        setFooterInfo(footerInfo)

        // return {
        //   props: {
        //     clubData:clubs,
        //     footerData:footerInfo
        //   }
        // }
        
      }
      getData()

  }, []);

    return (
      <>
        <div className={`bg-white relative`}>
          <GlobalSiteProvider>
           
           
            <main className="main flex">
            <div className="fixed md:relative z-30 w-full md:w-64 bg-opacity-90 bg-darkBlue"><SideBar clubInfo={clubInfo}/></div>
            <div className=" w-full md:w-full">{props.children}</div>
            </main> 
            <Footer footerInfo={footerInfo}/> 
          </GlobalSiteProvider>
        </div>
      </>
    );
}
  
export default Layout;

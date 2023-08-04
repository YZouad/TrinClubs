import CtaSimpleCentered from "../../components/cta-sections/simple-center";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
 
 
 
const PostDetailContent = (post) => {
   
    const {title, clubImage, description} = post.item.fields;
    console.log('post', post);
    return (
      <>        
     
        <div className="mx-auto w-full">
        <img className="mb-10 overflow-hidden flex m-auto h-[400px] w-screen object-cover" src={'https://' + clubImage.fields.file.url} width={800} height={400} alt=""/> 
         
          <div className=" max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"> 
              {title}
          </h1>
          <div className="mt-10">
               {documentToReactComponents(description)}
          </div>
          </div>
         

          </div> 
      
      </>
    );
}
  
export default PostDetailContent;
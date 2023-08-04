import CtaSimpleCentered from "../../components/cta-sections/simple-center";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
 
 
 
const PostDetailContent = (post) => {
   
    const {title, heroImg, richText} = post.item.fields;
    console.log('post', post);
    return (
      <>        
      <CtaSimpleCentered>
        <Image className="my-10 overflow-hidden w-auto flex m-auto h-[400px] object-cover" src={'https://' + heroImg.fields.file.url} width={800} height={400} alt=""/> 
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> 
              {title}
          </h1>
          <div className="mt-10">
               {documentToReactComponents(richText)}
          </div>
         
      </CtaSimpleCentered>
      </>
    );
}
  
export default PostDetailContent;
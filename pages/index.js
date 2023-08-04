import Sentiment from "../components/cohere-ai/sentiment"
import CtaSimpleCentered from "../components/cta-sections/simple-center"
import HeroSimple from "../components/heroes/heroSimple"
import HeroVideo from "../components/heroes/heroVideo"
import Search from "../components/search/search"
 
function HomePage(props) {
 
    return (
        <div className="relative">
        <HeroVideo src="/videos/trinity-intro.mp4"></HeroVideo>
        {/* <HeroSimple></HeroSimple> */}
        <div className="absolute px-5 z-20 w-full flex mx-auto inset-0">
            <Search/>  
        </div>
       
        </div>
    )
}

export default HomePage
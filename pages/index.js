import Sentiment from "../components/cohere-ai/sentiment"
import CtaSimpleCentered from "../components/cta-sections/simple-center"
import HeroSimple from "../components/heroes/heroSimple"
import HeroVideo from "../components/heroes/heroVideo"
 
function HomePage(props) {
 
    return (
        <>
        <HeroSimple></HeroSimple>
        <Sentiment></Sentiment>
        </>
    )
}

export default HomePage
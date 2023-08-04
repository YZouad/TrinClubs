import { Fragment, useContext } from "react"
import Footer from "./Footer";
import { useRouter } from "next/router";
import StickyHeader from "./StickyHeader";
import GlobalSiteProvider from "../../store/global-context";
import Script from 'next/script'

const Layout = (props) => {
   

  const router = useRouter(); 
  //const headerGradient = router.pathname === '/' ? 'isolate' : '';
  const headerGradient = router.pathname === '/' ? '' : '';

    return (
      <>
       <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5R6DQK3"
      height="0" width="0" className="hidden invisible"></iframe></noscript>
        <div className={`bg-white relative`}>
          <GlobalSiteProvider>
            <StickyHeader></StickyHeader>
            <main className="main">{props.children}</main> 
            <Footer/> 
          </GlobalSiteProvider>
        </div>
      </>
    );
}
  
export default Layout;

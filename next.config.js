const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');
/** @type {import('next').NextConfig} */

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER)
    
    return {
        
        env: {
           mongodb_username: 'rlx99', 
           mongodb_password: 'React23',
           mongodb_cluster: 'react-dev',
           NEXTAUTH_URL: 'http://localhost:3000/',
           CONTENTFUL_API:'w33z9x9hbigo',
           CONTENTFUL_ACCESS_KEY:'-YZPYq6xBQAEbnyz7gjCdyrSIq_Ck2uxUQsf6frpgjc',
           NEXT_PUBLIC_ALGOLIA_APP_ID: 'CVD92LB8WU',
           NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY:'5fd99043d785ecb0dca523dd989fa08f',
           ALGOLIA_SEARCH_ADMIN_KEY: '76bf012bd1574a933f61eae7826d72b7'
        },
        images: {
          domains: ['images.ctfassets.net']
        }
    };
    //else
    return {
        
      env: {
         mongodb_username: 'rlx99', 
         mongodb_password: 'React23',
         mongodb_cluster: 'react-dev',
         NEXTAUTH_URL: 'http://localhost:3000/',
         CONTENTFUL_API:'w33z9x9hbigo',
         CONTENTFUL_ACCESS_KEY:'-YZPYq6xBQAEbnyz7gjCdyrSIq_Ck2uxUQsf6frpgjc',
         NEXT_PUBLIC_ALGOLIA_APP_ID: 'CVD92LB8WU',
         NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY:'5fd99043d785ecb0dca523dd989fa08f',
         ALGOLIA_SEARCH_ADMIN_KEY: '76bf012bd1574a933f61eae7826d72b7'
      },
      images: {
        domains: ['images.ctfassets.net, nextjs-valtech.vercel.app, nextjs-valtech-nxqtcfdb0-rlx.vercel.app']
      }
   };
  };

  
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
        },
        reactStrictMode: true,
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
      },
      reactStrictMode: true,
      images: {
        domains: ['images.ctfassets.net, nextjs-valtech.vercel.app']
      }
   };
  };

  
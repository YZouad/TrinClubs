import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/flex-grid.scss'
import {Provider} from 'next-auth/client'
import Script from "next/script";
import COMPANY_DATA from '../data/company'
import StructuredData from '../components/structured-data'


 
function MyApp({ Component, pageProps }) {
   
  const structuredData = {
    '@context': 'https://schema.org',
    "@type":"Website",
    "name":COMPANY_DATA.item.companyName,
    "description":COMPANY_DATA.item.metaDescription,
    "telephone":COMPANY_DATA.item.phone,
    "email": COMPANY_DATA.item.email,
    "url":COMPANY_DATA.item.siteUrl,
    "logo":COMPANY_DATA.item.logo
  };


  return (  

      <Layout>
      <StructuredData data={structuredData} />
      <Head>
      <title>Valtech NYC Intership 2023</title>
      <meta  name="description" content={COMPANY_DATA.item.metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp

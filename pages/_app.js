import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/flex-grid.scss'
import COMPANY_DATA from '../data/company'
import { useEffect, useState } from 'react'
 
 
const MyApp = ({ Component, pageProps }) => {
   
  return (  

      <Layout>
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

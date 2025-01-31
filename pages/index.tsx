import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeHero from '../components/HomeHero'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WhatWeDo from '../components/WhatWeDo'

const Home: NextPage = () => {
  return (
    <div className={`min-h-screen text-text-secondary items-center justify-center`}>
      <Head>
        <title>Limbo Funnles</title>
        <meta name="description" content="Generated by Limbo Funnles" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Nav/>
      
      <HomeHero/>

      <WhatWeDo/>

      <Footer/>
      
    </div>
  )
}

export default Home

import React from 'react'
import HomeTopSelectors from '../components/HomeTopSelectors'
import HomeCarousel from '../components/HomeCarousel'
import WebPage from '../components/webpage'


const Home = () => {
  return (
    <>
      <div>
        <HomeTopSelectors />
      </div>
      <div>
        <HomeCarousel />
      </div>
      <div>
        <WebPage />
      </div>
    </>
  )
}

export default Home
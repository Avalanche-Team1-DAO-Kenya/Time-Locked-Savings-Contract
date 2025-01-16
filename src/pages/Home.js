import React from 'react'
import HomeTopSelectors from '../components/HomeTopSelectors'
import HomeCarousel from '../components/HomeCarousel'


const Home = () => {
  return (
    <>
      <div>
        <HomeTopSelectors />
      </div>
      <div>
        <HomeCarousel />
      </div>
     
    </>
  )
}

export default Home
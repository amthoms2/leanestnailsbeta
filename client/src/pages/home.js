import { useState } from 'react'
import TopBar from '../components/Navbar/TopBar'
import Navbar from '../components/Navbar'
// import MainPage from '../components/MainPage'
// import SectionInfo from '../components/SectionInfo'
// import { homeObj1, homeObj3 } from '../components/SectionInfo/data'
// import NailOfferings from '../components/NailOfferings'
// import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <TopBar isOpen={isOpen} toggleBar={toggleBar} />
    <Navbar toggleBar={toggleBar} />
    {/* <MainPage /> */}
    {/* <SectionInfo {...homeObj1}/> */}
    {/* <NailOfferings /> */}
    {/* <SectionInfo {...homeObj2}/> */}
    {/* <SectionInfo {...homeObj3}/> */}
    {/* <Footer /> */}
    </>
  )
}

export default Home

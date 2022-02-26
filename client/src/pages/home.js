import { useState } from 'react'
import TopBar from '../components/Navbar/TopBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionInfo from '../components/SectionInfo'
import { aboutObj, galleryObj } from '../components/SectionInfo/data'
import NailServices from '../components/SectionInfo/NailServices'
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
    <Hero />
    <SectionInfo {...aboutObj}/>
    <NailServices />
    {/* <SectionInfo {...servicesObj}/> */}
    <SectionInfo {...galleryObj}/>
    {/* <Footer /> */}
    </>
  )
}

export default Home

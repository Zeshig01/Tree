import Header from "@/components/Header"
import Banner from "./Banner"
import About from "./About"
import Section from "./Section"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Section/>
        <Footer/>
    </div>
  )
}

export default page
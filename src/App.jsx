import Container from "./components/Container"
import Arrival from "./components/layout/Arrival"
import Banner from "./components/layout/Banner"
import Bestseller from "./components/layout/Bestseller"
import Category from "./components/layout/Category"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Phone from "./components/layout/Phone"
import Shipping from "./components/layout/Shipping"
import Special from "./components/layout/Special"
import Year from "./components/layout/Year"

function App() {
  

  return (
    <>
     <Header/>
     <Category/>
     <Banner/>
     <Shipping/>
     <Phone/>
     <Arrival/>
     <Bestseller/>
     <Year/>
     <Special/>
     <Footer/>
    </>
  )
}

export default App

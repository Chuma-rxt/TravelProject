import "./App.css"
import Destinations from "./Components/Destinations/Destination";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Reviews from "./Components/Reviews/Reviews";
import Questions from "./Components/Questions/Questions";
import Subscribe from "./Components/Subscribe/Subscribe";
import ContactUs from "./Components/Contacts/ContactUs";
import Footer from "./Components/Footer/Footer";


function App() {
  
  

  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      {/* <ContactUs /> */}
      <Footer/>



    </div>
   
  )
}

export default App;

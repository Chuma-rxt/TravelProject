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
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Homee from "./Components/Homee";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
        <Middle />
        <Destinations />
        <Portfolio />
        <Reviews />
        <Questions />
        <Subscribe />
        {/* <ContactUs /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

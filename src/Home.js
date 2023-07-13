import React from "react";
import Services from './components/Services'
import Partners from "./components/Partners";
import About from "./components/About";
import PastEvent from "./components/PastEvent";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Bookings from './components/Booking'



function Home() {
     return (
     <div>
      <Navbar />
      <Header/>
      <Services />
      <Partners />
      <PastEvent />
      <About />
      <Bookings/>


     </div>
    
     );


}
export default Home;
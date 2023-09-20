import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Partners from './components/partners';
import InfoCard from './components/infoCard';
import Contact from './components/contact';
import Newsletter from './components/newsletter';
import Footer from './components/footer';
import Shelf from './components/shelf';


function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Partners/>
       <Shelf/>
       <InfoCard/>
       <Contact/>
       <Newsletter/>
       <Footer/>
    </div>
  );
}

export default App;

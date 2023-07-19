import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import Footer from './Components/Footer';


import Home from './Components/Homepage/Home';
import Second from './Components/Secondpage/Second';

import Third from './Components/Thirdpage/Third';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Quote from './Components/Quote';




function App() {
  return (
    <div className='mainBack overflow-x-hidden'>
      {/* <audio src={backgroundMusic} autoPlay loop /> */}


      <Router>
        <Navbar />
      
      
        
        
          <Route exact path="/" ><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/quote"><Quote /></Route>
          <Route path="/verse/:chapter"  ><Second /></Route>
          <Route path="/chapter/:chapter/verses/:verse_num"  ><Third /></Route>
          

       

        <Footer />




      </Router>

    </div >
  );
}

export default App;

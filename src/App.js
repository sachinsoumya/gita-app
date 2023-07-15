import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import Footer from './Components/Footer';


import Home from './Components/Homepage/Home';
import Second from './Components/Secondpage/Second';

import Third from './Components/Thirdpage/Third';




function App() {
  return (
    <div className='mainBack overflow-x-hidden'>
      {/* <audio src={backgroundMusic} autoPlay loop /> */}


      <Router>
      
      
        
        
          <Route exact path="/" ><Home /></Route>
          <Route path="/verse/:chapter"  ><Second /></Route>
          <Route path="/chapter/:chapter/verses/:verse_num"  ><Third /></Route>
          

       

        <Footer />




      </Router>

    </div >
  );
}

export default App;

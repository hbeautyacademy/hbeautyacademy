import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Component2 from './routes/Component2.js';
import Component3 from './routes/Component3.js';
import Component4 from './routes/Component4.js';
import Component5 from './routes/Component5.js';
// import Intro from './routes/Intro';
import {
  Header, Intro
} from './routes'

// import { 
  // Intro,   // Footer, // Header,
  // Introduction, OurService,
  // WeddingSong, WeddingMc, WeddingCamera, WeddingDirecting, WeddingEvent,
  // Portfolio,
  // Review, Reason,
  // Contact
  // } from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      
      {/* <Routes>
        <Route path="/" element={<Component2 />} />
      </Routes> */}

      <Intro />
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
    </div>
  );
}



export default App;
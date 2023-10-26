import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
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
      <Intro />
    </div>
  );
}



export default App;
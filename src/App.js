import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import {
  Header, Intro, Footer,
  Introduction, OurService,
  WeddingSong, WeddingMc, WeddingCamera, WeddingDirecting, WeddingEvent,
  Portfolio,
  Review, Reason,
  Contact
} from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="/company">
          <Route path="introduction" element={ <Introduction /> } />
          <Route path="ourservice" element={ <OurService /> } />
        </Route>

        <Route path="/service">
          <Route path="weddingsong" element={ <WeddingSong /> } />
          <Route path="weddingmc" element={ <WeddingMc /> } />
          <Route path="weddingcamera" element={ <WeddingCamera /> } />
          <Route path="weddingdirecting" element={ <WeddingDirecting /> } />
          <Route path="weddingevent" element={ <WeddingEvent /> } />
        </Route>

        <Route path="/portfolio">
          <Route path="portfolio" element={ <Portfolio /> } />
        </Route>

        <Route path="/review">
          <Route path="review" element={ <Review /> } />
          <Route path="reason" element={ <Reason /> } />
        </Route>

        <Route path="/contact">
          <Route path="contact" element={ <Contact /> } />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}



export default App;
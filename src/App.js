import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import {
  Header, Intro, Footer,
  Introduction, OurService,
  Service01, Service02, Service03, Service04,
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
          <Route path="01" element={ <Service01 /> } />
          <Route path="02" element={ <Service02 /> } />
          <Route path="03" element={ <Service03 /> } />
          <Route path="04" element={ <Service04 /> } />
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
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Movies from './components/Movies';
import Sections from './components/Sections';
import Seats from './components/Seats';
import Success from './components/Success';

function App() {
  //const [page, setPage] = useState('Success');

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/sections/:filmId" element={<Sections />}></Route>
        <Route path="/seats/:sectionId" element={<Seats />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </BrowserRouter>
  ); 

  /*return (
    <div className="App">
      <Header />
      {page === 'Movies' &&
        <Movies />
      }
      {page === 'Sections' &&
        <Sections />
      }
      {page === 'Seats' &&
        <Seats />
      }
      {page === 'Success' &&
        <Success />
      }
    </div>
  ); */
}

export default App;

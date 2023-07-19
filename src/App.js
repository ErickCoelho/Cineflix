import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Sections from './components/Sections';
import Seats from './components/Seats';
import Success from './components/Success';

function App() {
  const [page, setPage] = useState('Success');

  return (
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
  ); 
}

export default App;

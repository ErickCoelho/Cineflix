import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Sections from './components/Sections';

function App() {
  const [page, setPage] = useState('Sections');

  return (
    <div className="App">
      <Header />
      {page === 'Movies' &&
        <Movies />
      }
      {page === 'Sections' &&
        <Sections />
      }
    </div>
  ); 
}

export default App;

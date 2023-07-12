import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  const [page, setPage] = useState('Movies');

  return (
    <div className="App">
      <Header />
      {page === 'Movies' &&
        <Movies />
      }
      {page === 'div' &&
        <div>OIIIII</div>
      }
    </div>
  ); 
}

export default App;

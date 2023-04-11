import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [banlists, setBanlists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/banlist/all')
      .then(response => response.json())
      .then(data => setBanlists(data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>YGO Banlist History</h1>
      </header>
      <main>
        {banlists.map(banlist => (
          <div key={banlist.id}>
            <h2>{banlist.date}</h2>
          </div>
        ))}
      </main>
      <footer>
        Created by Philip Lowe
      </footer>
    </div>
  );
}

export default App;

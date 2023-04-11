import './App.css';
import { useState, useEffect } from 'react';
import { Outlet, NavLink } from "react-router-dom";

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
            <NavLink
              to={`/banlist/${banlist.id}`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >
              <h2>
                {banlist.date}
              </h2>
            </NavLink>
          </div>
        ))}
      </main>
      <Outlet />
      <footer>
        Created by Philip Lowe
      </footer>
      {/* <Route path="/banlist/:id" component={Banlist} /> */}
    </div>
  );
}

export default App;

import React from 'react';

const api = {
  key: "2475be0405aefec3595bf4c387830ea8",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input
          type="text"
          className="search-bar"
          placeholder="search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;

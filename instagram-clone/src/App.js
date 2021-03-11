import React from 'react';
import './App.css';
import Post from './post';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <div className="app_header">
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="Instagram Logo" />
      </div>

      <h1>Hello</h1>

      {/* Posts */}
      <Post />
      {/* Posts */}
      {/*  */}

    </div>
  );
}

export default App;

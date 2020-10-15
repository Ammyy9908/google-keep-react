import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import 'bulma/css/bulma.css'
import './App.css'

function App() {
  return (
    <div className="App">
      {/*Navbar*/}
      <Navbar/>
      <div className="main-content">
      <Sidebar/>
      </div>
     
    </div>
  );
}

export default App;

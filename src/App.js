import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
    <BrowserRouter> 
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

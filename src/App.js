import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Space from './routes/Space';
import {useState} from 'react';
function App() {
  const [username, setusername] = useState("traveller");
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home setusername={setusername}/>} />
          <Route path="/space" element={<Space username ={username}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

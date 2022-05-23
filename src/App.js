import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      
      </Routes>
    </div>
  );
}

export default App;

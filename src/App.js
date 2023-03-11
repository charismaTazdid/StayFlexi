import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import HotelList from './Pages/HotelList/HotelList';
import Hotel from "./Pages/Hotel/Hotel";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/hotels' element={<HotelList />}> </Route>
        <Route path='/hotels/:id' element={<Hotel />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;

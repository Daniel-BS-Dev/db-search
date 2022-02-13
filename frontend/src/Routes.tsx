import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./core/components/NavaBar";
import Home from "./pages/Home";
import Search from "./pages/Search";


const MyRoutes = () => (
    <Router>
     <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<Search />} />
    </Routes>
  </Router>

);
export default MyRoutes;
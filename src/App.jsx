import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import About from "./pages/About"
import AddProduct from "./pages/addProduct"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

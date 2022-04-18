import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Allservices from "./components/Allservices/Allservices";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Allservices></Allservices>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

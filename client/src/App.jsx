import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Appontment from "./Components/Appontment";
import AuthLayout from "./Components/AuthLayout";
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment/:slug" element={<Appontment/>}  />
        <Route path="/auth" element={<AuthLayout/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

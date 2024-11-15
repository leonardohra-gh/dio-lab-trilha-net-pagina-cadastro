//import { Link } from "react-router-dom";
// import Button from "./components/Button";
// import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { GlobalStyle } from "./styles/global";
import { Cadastrar } from "./pages/cadastrar";

function App() {
  return (
    <>
    <Router>
    <GlobalStyle />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/feed" element={<Feed />} />
       <Route path="/cadastrar" element={<Cadastrar />} />
    </Routes >
   </Router>
    </>
  );
}

export default App;

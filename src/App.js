import './App.css';
import { AvaliacaoForm } from './components/avaliacao-form';
import NavbarMenu from './components/navbar-menu/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contatos } from './pages/contato';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<AvaliacaoForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Contatos" element={<Contatos />} />
          </Routes>
        </Router>
        {/* <AvaliacaoForm ></AvaliacaoForm> */}

      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

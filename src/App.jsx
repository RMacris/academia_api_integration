import './App.css';
import AvaliacaoPage from './pages/avaliacaoPage';
import NavbarMenu from './components/navbar-menu/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../src/components/formularioLogin/login.jsx"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cadastro from './components/formularioCadastro/cadastro';
import { LoginContext } from './Contexts/LoginContext';
import { UserTemplate } from './scripts/UserTemplate';

function App() {

  return (
    <div className="App">
      <LoginContext.Provider value={new UserTemplate() }>
        <NavbarMenu />
      </LoginContext.Provider>
        <main>
            <LoginContext.Provider value={{}}>
        <Router>
          <Routes>
              <Route path="/avaliacaoPage" element={<AvaliacaoPage />} />
              <Route path="/" element={<Login />} /> 
              <Route path="/cadastro" element={<Cadastro />} />


          </Routes>
        </Router>
            </LoginContext.Provider>
        </main>
        {/* Footer */}
    </div>
  );
}

export default App;

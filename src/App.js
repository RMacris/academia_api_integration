import './App.css';
import AvaliacaoPage from './pages/avaliacaoPage';
import NavbarMenu from './components/navbar-menu/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <main>
      <Router>
        <Routes>
          <Route path="/" element={<AvaliacaoPage />} /> 
        </Routes>
      </Router>

      </main>
      {/* Footer */}
    </div>
  );
}

export default App;

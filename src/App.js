import './App.css';
import { AvaliacaoForm } from './components/avaliacao-form';
import NavbarMenu from './components/navbar-menu/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Test from './pages/test'
import Login from "../src/components/formularioLogin/login.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <main>
      <Router>
        <Routes>
          <Route path="/" element={<AvaliacaoForm />} /> 
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
        {/* <AvaliacaoForm ></AvaliacaoForm> */}

      </main>
      {/* Footer*/}
    </div>
  );
}

export default App;
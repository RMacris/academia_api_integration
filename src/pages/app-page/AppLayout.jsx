import React from 'react'
import AvaliacaoPage from '../../pages/avaliacaoPage';
import NavbarMenu from  '../../components/navbar-menu/navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useAuthentication } from '../../Contexts/LoginContext';
import Login from "../../components/formularioLogin/login.jsx"
import Cadastro from "../../components/formularioCadastro/cadastro.jsx"
export function AppLayout() {
  const auth = useAuthentication()
  console.log(auth)
  return (
    <>
    <NavbarMenu ></NavbarMenu>
    <Router>
        <Routes>
        <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/" element={<Login/>}/>
            { auth.auth && <Route path="/avalicao" element={<AvaliacaoPage />} />}
        </Routes>
    </Router>
    </>
  )
}

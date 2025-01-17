import React from 'react'
import AvaliacaoPage from '../../pages/avaliacaoPage';
import Footer from './components/Footer/Footer.jsx';
import {NavbarMenu} from  '../../components/navbar-menu/navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Login } from '../../components/formularioLogin/login';
import { Cadastro } from '../../components/formularioCadastro/cadastro';
import { useAuthentication, useLoginData } from '../../Contexts/LoginContext';
import { Contatos } from '../contato'

import { Footer } from '../../components/footer/footer'
export function AppLayout() {
  const auth = useAuthentication()
  return (
    <>
    <NavbarMenu ></NavbarMenu>
    <Router>
        <Routes>
            { (auth.auth) 
              ? <Route path="/" element={<AvaliacaoPage />} />
              :<Route path="/" element={<Login />} /> 
            }
            { !(auth.auth) && <Route path="/signup" element={<Cadastro />} />}
            <Route path='/contato' element ={<Contatos />} ></Route>
        </Routes>
    </Router>
<<<<<<< HEAD
    <Footer ></Footer>
=======
    <Footer />
>>>>>>> origin/master
    </>
  )
}

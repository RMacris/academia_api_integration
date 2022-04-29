import React from 'react'
import AvaliacaoPage from '../../pages/avaliacaoPage';
import NavbarMenu from  '../../components/navbar-menu/navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useAuthentication, useLoginData } from '../../Contexts/LoginContext';

export function AppLayout() {
  const auth = useAuthentication()
  const data = useLoginData() 
  return (
    <>
    <NavbarMenu ></NavbarMenu>
    <Router>
        <Routes>
            { auth.auth && <Route path="/" element={<AvaliacaoPage />} />}
            {/* { !(auth.auth) && <Route path="/" element={<Login />} />} */}
        </Routes>
    </Router>
    </>
  )
}

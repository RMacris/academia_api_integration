import React from 'react'
import AvaliacaoPage from '../../pages/avaliacaoPage';
import NavbarMenu from  '../../components/navbar-menu/navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useAuthentication } from '../../Contexts/LoginContext';

export function AppLayout() {
  const auth = useAuthentication()
  return (
    <>
    <NavbarMenu ></NavbarMenu>
    <Router>
        <Routes>
            <Route path="/" element={<AvaliacaoPage />} />
        </Routes>
    </Router>
    </>
  )
}

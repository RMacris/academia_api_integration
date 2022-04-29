import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "gray", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>INSTITUCIONAL</Heading>
            <FooterLink href="#">Sobre</FooterLink>
            <FooterLink href="#">Conceito</FooterLink>
            <FooterLink href="#">Investidores</FooterLink>
            <FooterLink href="#">Central de Ajuda</FooterLink>
            <FooterLink href="#">Fale conosco</FooterLink>
            <FooterLink href="#">Edital Academy-Resilia</FooterLink>
            <FooterLink href="#">Canal Pandemia</FooterLink>
          </Column>
          <Column>
            <Heading>Planos</Heading>
            <FooterLink href="#">Planos</FooterLink>
            <FooterLink href="#">Contratos</FooterLink>
            <FooterLink href="#">Planos Corporativos</FooterLink>
            <FooterLink href="#">Academy-Resilia Supps</FooterLink>
            <FooterLink href="#">Academy-Resilia Plus</FooterLink>
          </Column>
          <Column>
            <Heading>Corporativo</Heading>
            <FooterLink href="#">Impressa</FooterLink>
            <FooterLink href="#">Quero ser um franqueado</FooterLink>
            <FooterLink href="#">Divulgue sua marca</FooterLink>
            <FooterLink href="#">Indique um ponto</FooterLink>
            <FooterLink href="#">Trabalhe Conosco</FooterLink>
             <FooterLink href="#">Graduação Ed.Fisica EAD</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook">
                <span style={{ marginLeft: "10px" }}>
                  <footer/>
                  <FaFacebook /> Facebook
              </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                <footer/>
                  <FaInstagram /> Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                <footer/>
                  <FaTwitter /> Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                <footer/>
                  <FaYoutube /> Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

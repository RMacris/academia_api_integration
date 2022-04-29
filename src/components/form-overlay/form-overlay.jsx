
import React from 'react'
import "./FormOverlay.css"
import styled from 'styled-components'

export const FormOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    top: 0;
    left: ${props => props.leftPos };
    transition: 0.5s ease-in-out;
    padding: 8px;
` 


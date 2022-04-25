import React from 'react'
import styled from 'styled-components'





export const StatisticsComponent = styled.div`
    position: relative; 
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    left: ${props => props.leftPos} ; 
    top: 0; 
    z-index: 0;
    visibility:  ${props => props.visibility};
    transition: left 0.5s ease-in-out, visibility 0.5s;
    z-index: -1;
    overflow: hidden;
    padding: 24px;
`


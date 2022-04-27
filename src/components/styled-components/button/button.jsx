import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    
    padding: 8px 10px;
    border-style: none;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    background-color: rgba(200,200,200);

    &:hover { 
        background-color: rgba(230,230,230);  
    }
    &:active { 
        background-color: rgba(240,240,240);  
    }
`
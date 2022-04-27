import styled from 'styled-components'

export const Input = styled.input`

    padding: 0.5rem 0.7rem;
    border-radius: 2px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
    background-color: rgb(245,245,245);
    margin-top: 10px;
    transition: 0.3s ease-in-out;
    &:focus{
        outline: none;
        border-bottom: 1px solid #999;
        background-color: rgb(250,250,250) ;
    }
`


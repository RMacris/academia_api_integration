import styled from "styled-components";

export const ContainerGrid = styled.form `
    /* justify-content: space-evenly  ; */
    /* align-items: center; */
    margin: ${props => props.margin};
    /* align-content: center; */
    /* justify-content: center; */
`

export const ContainerColumn = styled(ContainerGrid) `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
export const ContainerRow = styled(ContainerGrid) `
    display: flex;
    flex-direction: Row;
    flex-wrap: wrap;

`
import styled from 'styled-components';


export const Box = styled.div`
hr {
	border: 0;
	border-top: 1px solid #094CFA;
}
  padding: 80px 60px;
  background: rgb(30,30,30);
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
   
  @media (max-width: 1000px) {
    padding: 50px 20px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 1000px; */
    margin: 0 auto;
    /* background: gray; */
    
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* grid-template-columns: repeat(auto-fill, 
                         minmax(150px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(100px, 1fr));
  } */
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
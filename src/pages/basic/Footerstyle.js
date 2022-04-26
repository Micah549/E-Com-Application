import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: white;
  margin-top: 20%;
  width: 100%;
    bottom:0;
   display: inline-block;
  @media (max-width: 1000px) {
    padding: 50px 20px;
   
  }
  @media screen and (max-width: 600px) {
    padding: 30px 10px;
    margin-top: 10px;
    display:inline-block;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: 'Abel', sans-serif;
  text-decoration: none;
   
  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: red;
  margin-bottom: 40px;
  font-weight: bold;
`;
import styled from "styled-components";
import './hamburguer.css'
import Hamburguer from './hamburguer'


export default function Header() {
  
  return (
    <Section>
      <Logo>SR</Logo>
      <Hamburguer/>
    </Section>

      
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #363636;
  height:100px;
  color:#C0C0C0;
  padding:20px;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  border: solid 4px #C0C0C0;
  border-radius: 100px;
  padding: 10px;
`;


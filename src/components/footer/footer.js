import { SiLinkedin, SiTwitter, SiInstagram, SiWhatsapp } from "react-icons/si";
import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <Title>Me envie uma mensagem!</Title>
      <Container>
          <a href="https://www.linkedin.com/in/saullo-reis-874852231/" target='_blank'><SiLinkedin /></a>
          <a href="https://twitter.com/cast0rZIN" target='_blank'><SiTwitter /></a>
          <a href="https://www.instagram.com/saulloreis/" target='_blank'><SiInstagram /></a>
          <a href="https://wa.me/5521980448191" target='_blank'><SiWhatsapp /></a>
      </Container>
    </Section>
  );
}

const Container = styled.div`
    display:flex;
    flex-direction:row;

    a{
        margin:20px;
        list-style-type: none;
        color:black;
        background-color:#ddc8c4;
        width:40px;
        height:40px;
        border-radius:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: color, background-color 0.7s;
    }

    a:hover{
        color:#EFF9F0;
        background-color:black;

    }
`;
const Section = styled.section`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #363636;
  color:#D3D3D3;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

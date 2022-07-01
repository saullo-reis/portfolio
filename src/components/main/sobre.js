import styled from "styled-components";
import foto from "../../assets/img/fotominha.jpeg";
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si'

export default function Sobre() {
  return (
    <Section id="sobre">
      <Title>Sobre mim</Title>
      <Division>
        <Foto src={foto}></Foto>
        <Text>
          Me chamo Saullo Reis, sou um programador Júnior focado no frontend,
          sou uma pessoa ativa e que sempre tenta melhorar a cada dia tirando
          minhas dúvidas, faço um curso especificado para o webdeveloper com
          mentoria que abrange essas <a href="#tecnologias">tecnologias</a>,
          gosto muito de programar e busco trabalhar com isso algum dia.
        </Text>
        <Redes className="redes-sociais">
            <a href="https://www.linkedin.com/in/saullo-reis-874852231/" target="_blank"><SiLinkedin/></a>
            <a href="https://twitter.com/cast0rZIN" target="_blank"><SiTwitter/></a>
            <a href="https://github.com/saullo-reis" target="_blank"><SiGithub/></a>
        </Redes>
      </Division>
    </Section>
  );
}

const Foto = styled.img`
  width: 170px;
  border-radius:200px;
  margin:20px;
`;

const Redes = styled.div`
    margin:30px;
    a{
        color:#13070c;
        margin:10px;
    }
    a:hover{
      transform:scale(1.07);
      z-index:2;
    }
`;

const Division = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Text = styled.p`
  font-size: 100%;
  font-weight: bold;
  width: 70%;
  text-align: justify;
  a {
    color: #13070c;
    text-decoration: none;
    transition: color 0.7s;
    cursor: pointer;
  }
  a:hover {
    color: #eff9f0;
  }
`;
const Section = styled.section`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1C1C1C;
  padding: 40px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

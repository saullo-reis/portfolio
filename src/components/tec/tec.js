import styled from "styled-components";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";

export default function Tecnologias() {
  return (
    <Section id="tecnologias">
      <Title>Habilidades</Title>
      <Ul>
        <li>
          <Div>
            <SiHtml5 />
            <H2>HTML</H2>
            <p>
              HTML foi a primeira habilidade que aprendi, com ela faço os
              esqueletos de meus sites.
            </p>
          </Div>
        </li>
        <li>
          <Div>
            <SiCss3 />
            <H2>CSS</H2>
            <p>
              CSS foi a segunda habilidade que aprendi, essa linguagem de
              programação é utilizada pra estilizar o esqueleto do HTML.
            </p>
          </Div>
        </li>
        <li>
          <Div>
            <SiGit />
            <H2>Git</H2>
            <p>
              O git utilizo ele para dar commit para um repositório, clonar
              códigos, manusear pastas entre outros funcionalidades.{" "}
            </p>
          </Div>
        </li>
        <li>
          <Div>
            <SiJavascript />
            <H2>JavaScript</H2>
            <p>
              O JavaScript é uma linguagem backend, que faz dar vida ao site,
              podendo criar quase qualquer coisa que você queira para o site.
            </p>
          </Div>
        </li>
        <li>
          <Div>
            <SiReact />
            <H2>React</H2>
            <p>
              O react é uma biblioteca da Meta no JavaScript em que engloba
              todas essas linguagem em uma.{" "}
            </p>
          </Div>
        </li>
      </Ul>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: solid gray 1px;
  color: #1C1C1C;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  margin:20px;
`;

const Ul = styled.ul`
  padding: 60px;
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));

  li {
    margin: 40px;
    list-style-type: none;
    font-size: 30px;
  }
`;

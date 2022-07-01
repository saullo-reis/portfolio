import Header from "./components/header/header";
import { createGlobalStyle } from "styled-components";
import font from "./assets/fonts/Roboto-Bold.ttf";
import Sobre from "./components/main/sobre";
import Projetos from "./components/main/projetos/projetos";
import Tecnologias from "./components/tec/tec";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sobre />
      <Projetos />
      <Tecnologias />
      <Footer/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'font';
  src: url(${font}) FORMAT('truetype');
} 

  *{
    font-family: 'font', sans-serif;
    margin:0;
    padding:0;
  }

  body{
    background-color:#D3D3D3;
  }

  html, body, #root, .App{
    position:relative;
    min-height:100vh;
    max-width:100vw;
    width:100vw;
  }
`;

export default App;

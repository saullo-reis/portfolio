import "./hamburguer.css";
import { useState } from "react";
import styled from "styled-components";

export default function Hamburguer() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  };

  return (
    <div className="container">
      <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
        <div className='hamburguer hamburguerIcon'></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <Menu className="list">
          <ul className="listItems">
            <li>
              <a href="#sobre">Sobre mim</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#tecnologias">Habilidades</a>
            </li>
          </ul>
        </Menu>
      </div>
    </div>
  );
}

const Menu = styled.div`
  a {
    text-decoration: none;
    color:#13070c;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
    transition: color 0.7s;
    cursor:pointer;
  }
  a:hover {
    color:#6B4D57;
  }
`;
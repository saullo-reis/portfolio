import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Item from "./items";
import coffee from "../../../assets/img/CAFÉ.gif";
import faq from "../../../assets/img/faq.gif";
import pokemon from "../../../assets/img/projeto.gif";
import github from "../../../assets/img/github api.gif";
import pizza from "../../../assets/img/pizza.gif"

export default function Projetos() {
  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 },
  ];

  return (
    <Section id='projetos'>
      <div className="container">

        <CarouselWrapper className="carousel-wrapper">
          <Title>Projetos</Title>
          <Carousel breakPoints={breakPoints}>
            <Item>
              <a href="https://lovely-starburst-b74520.netlify.app/">
                <img src={pokemon}></img>
              </a>
            </Item>
            <Item>
              <a href="https://saullo-reis.github.io/projeto-inicial-fetch-github-api-main/">
                <img src={github}></img>
              </a>
            </Item>
            <Item>
              <a href="https://saullo-reis.github.io/landing-page-code-cafe/">
                <img src={coffee}></img>
              </a>
            </Item>
            <Item>
              <a href="https://saullo-reis.github.io/faq/">
                <img src={faq}></img>
              </a>
            </Item>
            <Item>
              <a href="https://saullo-reis.github.io/pizzaria/">
                <img src={pizza}></img>
              </a>
            </Item>
          </Carousel>
        </CarouselWrapper>
      </div>
    </Section>
  );
}

const Section = styled.section`
    border-bottom:solid gray 1px;
    border-top:solid gray 1px;
`


const CarouselWrapper = styled.div`
  margin-top: 70px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #1C1C1C;
  margin-bottom: 30px;
`;

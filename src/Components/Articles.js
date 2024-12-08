import React from 'react'
import styled from 'styled-components'
function Articles() {
  return (
    <Container>
        <PageTitle>
          <h2>Our Articles</h2>
          <p>Here are some projects we have been working on! For any scientific jargon, feel free to check out our <a href="#">glossary</a>  below.
          </p>
        </PageTitle>
        <ArticlesWrapper>
          {/* Article One*/ }
          <ArticleBox>
            <Cover src="images/Gas_Clouds_Cover.jpg"/>
            <ArticleContent>
              <h2> Gas Clouds to Fire Balls: The First Stages of Star Formation </h2>
              <p> The universe is filled with stars and other celestial objects that hold the secrets of how everything came to be. This article talks about how stars are born from clouds of gas and dust called nebulae. It explains how gravity and pressure play important roles in this process.</p>

            </ArticleContent>   
            <ReadButton>
                    <a href="#"> Download PDF </a>
            </ReadButton>       
          </ArticleBox>
          {/* Article Two*/ }
{/*           <ArticleBox>
            <Cover src="images/Gas_Clouds_Cover.jpg"/>
            <ArticleContent>
              <h2> Gas Clouds to Fire Balls: The First Stages of Star Formation </h2>
              <p> The universe is filled with stars and other celestial objects that hold the secrets of how everything came to be. This article talks about how stars are born from clouds of gas and dust called nebulae. It explains how gravity and pressure play important roles in this process.</p>

            </ArticleContent>   
            <ReadButton>
                    <a href="#"> Download PDF </a>
            </ReadButton>       
          </ArticleBox> */}
        </ArticlesWrapper>
    </Container>
  )
}

export default Articles
const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(images/starsBackgroundSix.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const PageTitle = styled.div`
    margin-top: 9vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 45px;
    position: relative;
    h2{
      position: relative;
    }
    h2::after{
      content: "";
      position: absolute;
      height: 2px;
      left: 0;
      bottom: -5px;
      width: 110%;
      background-color: white;
    }
    p{
      padding-top: 20px;
      padding-bottom: 20px;
      text-align: left;
    }
`
const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 600px));
  margin-left: 20px;
  height: 70%;
  justify-content: start;
  @media (max-width: 768px){
    grid-template-columns: 1fr;
    gap: 30px;
  }

`
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100%;
  margin-right: 0px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 1024px) {
    max-width: 80%; 
  }
`;
const Cover = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 15px;
  aspect-ratio: 16/9;
`
const ArticleContent = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

`
const ReadButton = styled.div`
    border: solid 1px;
    border-radius: 6px;
    border: 0;
    box-shadow: inset 0 0 0 2px #ffffff;
    font-weight: 700;
    font-size: 12.8px;
    letter-spacing: 1px;
    line-height: 46px;
    padding: 0 32px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
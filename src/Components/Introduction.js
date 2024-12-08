import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
function Introduction() {
  return (
    <Container>
        <Fade bottom>
            <TextItem>
                <h1> Welcome to the TUNSA Astronomy & Astrophysics Department</h1>
            </TextItem>
        </Fade>
        <Image>
            <img src="images/TeamPhoto.jpg" alt="Teamphoto" />
        </Image>
        <Fade bottom>
            <TextItemTwo>
                <p> We are a team of young Tunisian astronomy enthusiasts. Our work is a means for us to delve deeper into the field of astronomy and share our passion for it in Tunisia!</p>
            </TextItemTwo>
        </Fade>
        <Buttons>
            <Fade bottom>
                <ButtonsGroup>
                    <LeftButton>
                        <a href="#"> Our Articles</a>
                    </LeftButton>
                    <RightButton>
                    <a href="#"> Our Team</a>
                    </RightButton>
                </ButtonsGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Fade>
        </Buttons>
    </Container>
  )
}

export default Introduction

const Container = styled.div`
    background-image: url('/images/starsBackgroundSix.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
`
const TextItem = styled.div`
    padding-top: 12vh;
    padding-right: 8vh;
    padding-left: 8vh;
    text-align: center;
    h1{
        margin-bottom: 10px;
    }
    p {
        font-weight: 500;
    }
    @media (max-width: 768px) {
    padding-right: 5vh;
    padding-left: 5vh;
    }


`

const TextItemTwo = styled(TextItem)`
    padding-top: 5px;
`
const Image = styled.div`
    margin-top: 15px;
    margin-bottom: 5px;
    border: solid 1px;
    border-radius:5px;
    overflow: hidden;
    aspect-ratio: 16/9;
    img{
        object-fit: cover;
        display: block;
        height: 100%;
        width: 100%;
    }
    @media (max-width: 768px) {
         width: 80%;
    }
`
const ButtonsGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
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
    margin: 10px;
`
const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    @media (max-width: 768px) {
        margin-top: -30px;
    }

`
const Buttons = styled.div`

`
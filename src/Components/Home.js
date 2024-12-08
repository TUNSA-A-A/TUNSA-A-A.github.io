import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Introduction from './Introduction'
import Team from './Team'
import Articles from './Articles'
import Glossary from './Glossary'
function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Introduction />
        <Team />
        <Articles />
        <Glossary /> 
      </Container>
    </div>
  )
}

export default Home
const Container = styled.div`
    height: 100vh;
`
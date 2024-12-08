import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function Team() {
  const [downArrow, setDownArrow] = useState(false)
  return (
    <Container>
      <Title>
          <h2> Our Team </h2>
      </Title>
      <ActiveMembers>
        {/* First Team Member */}
        <MemberCard>
          <MemberPhoto src="images/ADhahbi.jpg"/>
          <MemberDescription>
              <h3> Ashraf Dhahbi </h3>
              <p>Hey! I'm the TUNSA A&A team lead, and a SURA post-bac @ NASA GSFC working on the Exoplanet Modeling and Analysis Center (EMAC) and Exoplanet Spectroscopy. My main research interests revolve around planetary formation, evolution and habitability to answer the question: "How likely are we?"</p>
          </MemberDescription>
        </MemberCard>
        {/* Second Team Member */}
        <MemberCard>
          <MemberPhoto src="images/ATurki.jpg " alt="Ashraf Dhahbi"/>
          <MemberDescription>
              <h3> Ahmed Turki </h3>
              <p>With a profound passion for planetary science and high-energy astrophysics, I am grateful to be the youngest member of our team. I have a keen interest in pursuing a career in astrophysics research, delving into the mysteries of the universe, and contributing to the forefront of scientific exploration.</p>
          </MemberDescription>
        </MemberCard>
        {/* Third Team Member */}
        <MemberCard>
          <MemberPhoto src="images/MHammedi.jpeg" alt="Maryem Hammedi"/>
          <MemberDescription>
              <h3> Maryem Hammedi </h3>
              <p>Hey, I'm Maryem HAMMEDI, a 23-year-old Electrical Engineering student specializing in Electrical Systems. I'm passionate about astrophysics and aspire to contribute my expertise to the aerospace industry.</p>
          </MemberDescription>
        </MemberCard>
      </ActiveMembers>    
      <Collapsible onClick={() => setDownArrow(!downArrow)}>
        {downArrow ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        <h3> Tunsa A&A Alumni </h3>
        {downArrow ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </Collapsible>
      { downArrow && (
        <Alumni show={downArrow}>
          <ActiveMembers>
            {/* First Alumni */}
            <MemberCard>
              <MemberPhoto src="images/ABouchiba.jpg"/>
              <MemberDescription>
                  <h3> Alae Bouchiba </h3>
                  <p>Hey, I'm Alae, a gal with a gravitational pull towards all things space! I am an engineering student at INSAT, Moroccan, and you can either find me gazing at the stars or lost in a black hole of astrophysics articles. Let's explore the universe together—one supernova at a time!</p>
              </MemberDescription>
            </MemberCard>
            {/* Second Amlumni */}
            <MemberCard>
              <MemberPhoto src="images/JSallemi.jpg " alt="Ashraf Dhahbi"/>
              <MemberDescription>
                  <h3> Jesser Sallemi </h3>
                  <p>Hi, I'm Jesser Sallemi, a 22-year-old astronomy enthusiast and software engineering student. Passionate about data science and cybersecurity, I dive into space and digital worlds with equal fervor, ready to make significant impacts in both domains.</p>
              </MemberDescription>
            </MemberCard>
            {/* Third Alumni */}
            <MemberCard>
              <MemberPhoto src="images/HTlayla.jpg" alt="Maryem Hammedi"/>
              <MemberDescription>
                  <h3> Hayfa Tlayla</h3>
                  <p>Hey, I'm Hayfa Tlayla. I'm a 4th-year architecture student and a tech entrepreneur working on AI-driven accommodation solutions. I'm actively building a career in space and orbital architecture, willing to contribute to human habitat design in outer space.</p>
              </MemberDescription>
            </MemberCard>
          </ActiveMembers>  
        </Alumni>
      )}
    </Container>
  )
}

export default Team
const Container = styled.div`
    border-collapse: collapse;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url('/images/starsBackgroundEight.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 20px;


`
const Title = styled.div`
    margin-top: 10vh;
    display: flex;
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
` 
const ActiveMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 30px 40px;
  column-gap: 80px;
  row-gap: 30px;
  width: 100%;
`
const MemberCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 600px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4);
  }

`
const MemberPhoto = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid white;
`
const MemberDescription = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  > :last-child {
					margin-bottom: 0;
	}

`
const Collapsible = styled.div`
  margin-right: 40px;
  margin-left: 40px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.4);
  }
  transform: ${props => props.show ? "translateX(150%)" : "translateX(0)"};
`

const Alumni = styled.div`
  transform: ${props => props.show ? "translateX(0)" : "translateX(100%)" };
`
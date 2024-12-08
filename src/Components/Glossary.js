import React, { useState } from "react";
import styled from "styled-components";

function Glossary() {
  const [isVisible, setIsVisible] = useState(false);

  // glossary data
  const glossaryData = [
    { term: "Protostar", definition: "A collapsing region of a molecular cloud marked by the early stages of star formation before nuclear fusion ignites in its core." },
    { term: "Star Cluster", definition: "A group of stars that share a common origin and are held together by gravity, often formed from the same molecular cloud." },
    { term: "Main Sequence", definition: "The phase in a star's life during which it is converting hydrogen into helium in its core, representing the majority of a star's 'life.'" },
    { term: "Stellar Nursery", definition: "A region within a molecular cloud where star formation is actively occurring." },
    { term: "Accretion Disk", definition: "A rotating disk of matter, often formed by material falling onto a central object, such as a protostar, during the process of star formation." },
    { term: "Protoplanetary/Circumstellar Disk", definition: "The gas and dust remaining in orbit around a newly formed star. The birthplace of planets." },
    { term: "Earth-like/Terrestrial Planets", definition: "Earth-sized and smaller. Rocky worlds, composed of rock, silicate, water, and/or carbon." },
    { term: "Super-Earths", definition: "Terrestrial planets more than twice the mass of the earth." },
    { term: "Gas Giants", definition: "Gas-dominated planets of low density, mostly comprised of hydrogen and helium." },
    { term: "Hot Jupiters", definition: "Gas giants that are very close to their host stars. The majority of observed exoplanets are Hot Jupiters due to their size and temperature." },
    { term: "Neutron Star", definition: "The dense remnants of supermassive stars that have exploded as supernovae." },
    { term: "T Tauri Star", definition: "A transitional stage between infrared stars surrounded by opaque nebulae and stable stars that have settled on the main sequence." },
    { term: "Supernova", definition: "A powerful explosion of a star." },
    { term: "White Dwarf", definition: "The stage after nuclear fuel exhaustion for low and medium-mass stars." },
    { term: "Galactic Halo", definition: "The spherical component of a galaxy that surrounds the galactic disk, containing older stars and globular clusters." },
    { term: "Pulsar", definition: "A highly magnetized, rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles." },
    { term: "Dark Matter", definition: "Hypothetical matter that does not emit, absorb, or reflect light, and is believed to make up approximately 85% of the matter in the universe, influencing the large-scale structure of the cosmos." },
    { term: "Gamma-Ray Burst (GRB)", definition: "An extremely energetic astronomical event that releases a burst of gamma-ray photons, often associated with the collapse of massive stars or the collision of compact objects." },
    { term: "Quasar", definition: "A highly energetic and distant active galactic nucleus, powered by a supermassive black hole at the center of a galaxy." },
    { term: "Stellar Wind", definition: "A flow of charged particles (plasma) ejected from a star, often during its formation or later stages of evolution. Stellar winds play a role in shaping the surrounding interstellar medium." },
    { term: "Molecular Cloud", definition: "A cold and dense interstellar cloud composed mostly of molecular hydrogen. These clouds are the primary sites for the formation of stars and planetary systems." },
    { term: "Nuclear Fusion", definition: "The process in which atomic nuclei combine to form a more massive nucleus, releasing energy; it is the fundamental mechanism powering stars." },
    { term: "Gravitational Collapse", definition: "The process in which a region of higher-than-average density undergoes self-amplifying gravitational forces, leading to star formation." },
    { term: "Cosmic Dust", definition: "Tiny solid particles, often composed of silicates and carbon compounds, that exist in the interstellar medium and play a crucial role in star and planet formation." },
    { term: "ISM Chemistry", definition: "ISM stands for Interstellar Medium, which refers to the matter and energy that exists between stars in a galaxy." },
    { term: "The Pleiades", definition: "An extremely hot cluster of young stars. Also known as the 'Seven Sisters' or M45, this stellar family has been the subject of numerous myths in cultures worldwide." },
    { term: "Hyades", definition: "The Hyades cluster is the closest star cluster to Earth, at a distance of 150 light-years. This cluster is very easy to spot in the night sky, because it has a compact and distinctive shape of the letter V." }
  ];
  

  // Sort glossary data alphabetically by term
  const sortedGlossaryData = glossaryData.sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  const toggleGlossary = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Title>
        <h2>Our Articles</h2>
        <p>
          Below are definitions for some of the scientific jargon used in our
          articles.
        </p>
      </Title>
      <GlossaryBox>
        <ReadButton onClick={toggleGlossary}>
          {isVisible ? "Close Glossary" : "Open Glossary"}
        </ReadButton>
        {isVisible && (
          <GlossaryContent>
            <dl>
              {sortedGlossaryData.map((item, index) => (
                <React.Fragment key={index}>
                  <dt>{item.term}</dt>
                  <dd>{item.definition}</dd>
                </React.Fragment>
              ))}
            </dl>
          </GlossaryContent>
        )}
      </GlossaryBox>
    </Container>
  );
}

export default Glossary;

const Container = styled.div`
    border-collapse: collapse;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url('/images/starsBackgroundFive.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 20px;


`
const Title = styled.div`
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

const GlossaryBox = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const ReadButton = styled.div`
  border: solid 1px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 2px #ffffff;
  font-weight: 700;
  font-size: 12.8px;
  line-height: 46px;
  padding: 0 32px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 20px 50px;
`;

const GlossaryContent = styled.div`
    margin: 0 50px;
    dl {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        dt {
        font-weight: bold;
        padding: 10px 15px;
        background-color: #222;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }
        dt:hover {
        background-color: #444;
        }
        dd {
        padding: 10px 15px;
        background-color: transparent;
        color: #ccc;
        border-radius: 5px;
        margin-left: 15px;
        }
    }
`;

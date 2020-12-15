import React from "react";
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-parallax';
import Container  from "react-bootstrap/Container";
import bgImage from "./assets/img/parallex/background.webp";

import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component"
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";

import "./App.css";

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel/>
      <TitleMessage/>
      <div>
        <Parallax blur={{ min: -30, max: 30 }}
          bgImage={bgImage}
          bgImageAlt=""
          strength={-200}>
            <div>
            <Container className="container-box rounded">
            <Fade duration={100}>
            <About/>
            </Fade>
          </Container>
          </div>
         </Parallax>
    </div>
    <Container className="container-box rounded">
    <Fade duration={100}>
          <hr />
        <Skills />
          </Fade>
      </Container>
    </div>
  );
};

export default App;
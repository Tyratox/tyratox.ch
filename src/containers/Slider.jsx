import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import { colors } from "../utilities/style";
import Container from "../components/Container";
//import HeaderImage from "../components/HeaderImage";
//import HeaderImage from "../../img/header.svg";
import Earth from "../../img/earth.svg";
import Moon from "../../img/moon.svg";
import Sun from "../../img/sun.svg";
import Saturn from "../../img/saturn.svg";
import Meteor from "../../img/meteor.svg";
import Rocket from "../../img/rocket.svg";
import MediaQuery from "../components/MediaQuery";

const SliderWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 250px;
  /*max-height: 25vh;*/
  overflow: hidden;

  background-color: #2C3E50;

  img{
    width: 100%;
    height: auto;
    display: block;
  }

  /*svg {
    height: 100%;
    width: auto;
    display: block;
    margin: 0 auto;
  }

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    content: "";

    background-image: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.accent}
    );
    opacity: 0;
  }*/
`;

const EarthImg = styled.div`
  position: absolute;
  left: 50%;
  bottom: -15%;

  width: 200px;

  transform: translateX(-50%);
`;

const MoonImg = styled.div`
  position: absolute;
  right: 50%;
  bottom: 100px;

  width: 75px;

  transform: translateX(-25%);
`;

const SunImg = styled.div`
  position: absolute;
  left: 0;
  top: 10%;

  width: 100px;
`;

const SaturnImg = styled.div`
  position: absolute;
  right: 0;
  top: 10%;

  width: 250px;
`;

const MeteorImg = styled.div`
  position: absolute;
  left: 5%;
  bottom: -60%;

  width: 200px;
`;

const RocketImg = styled.div`
  position: absolute;
  left: 60%;
  bottom: 0;

  width: 150px;
`;

/**
 * The slider component
 * @returns {Component} The component
 */
class Slider extends React.PureComponent {
  render = () => {
    return (
      <SliderWrapper>
        <Container>
          <SunImg>
            <img src={Sun} />
          </SunImg>
          <MediaQuery md up>
            <MoonImg>
              <Parallax offsetYMin={-750} offsetYMax={250} slowerScrollRate>
                <img src={Moon} />
              </Parallax>
            </MoonImg>
          </MediaQuery>
          <EarthImg>
            <Parallax offsetYMin={-40} offsetYMax={50} slowerScrollRate>
              <img src={Earth} />
            </Parallax>
          </EarthImg>
          <MediaQuery lg up>
            <MeteorImg>
              <Parallax
                offsetXMax={100}
                offsetXMin={0}
                offsetYMax={0}
                offsetYMin={-100}
              >
                <img src={Meteor} />
              </Parallax>
            </MeteorImg>
          </MediaQuery>
          <MediaQuery lg up>
            <SaturnImg>
              <img src={Saturn} />
            </SaturnImg>
          </MediaQuery>
          <RocketImg>
            <Parallax
              offsetXMax={100}
              offsetXMin={-100}
              offsetYMax={100}
              offsetYMin={-100}
            >
              <img src={Rocket} />
            </Parallax>
          </RocketImg>
        </Container>
      </SliderWrapper>
    );
  };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Slider);

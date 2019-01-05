import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { colors } from "../utilities/style";
import Container from "../components/Container";

const SliderWrapper = styled.div`
  position: relative;
  height: 300px;
  max-height: 25vh;

  /*background-image: url("${MachineRedBlue}");
  background-position: 50% 40%;
  background-size: 80% auto;
  background-repeat: no-repeat;*/

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    content: "";

    background-image: linear-gradient(
      to right,
      ${colors.primaryLight},
      ${colors.accentLight}
    );
    opacity: 0.7;
  }
`;

/**
 * The slider component
 * @returns {Component} The component
 */
class Slider extends React.PureComponent {
  render = () => {
    return (
      <SliderWrapper>
        <Container />
      </SliderWrapper>
    );
  };
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Slider);

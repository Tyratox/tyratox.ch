import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Wrapper from "../components/Wrapper";
import Page from "../components/Page";
import Container from "../components/Container";

/**
 * The frontpage
 * @returns {Component} The component
 */
class Frontpage extends React.PureComponent {
  render = () => {
    return (
      <Wrapper slider header footer>
        <Helmet>
          <title>Nico Hauser</title>
        </Helmet>
        <Page>
          <Container>hi</Container>
        </Page>
      </Wrapper>
    );
  };
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);

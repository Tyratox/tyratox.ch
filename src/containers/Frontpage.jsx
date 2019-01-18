import { Helmet } from "react-helmet";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Wrapper from "../components/Wrapper";
import Page from "../components/Page";
import Container from "../components/Container";
import AlgorithmEntry from "../components/AlgorithmEntry";
import { getProjects } from "../reducers";
import { fetchLatestProjects } from "../actions/project";
import ProjectEntry from "../components/ProjectEntry";
import Placeholder from "../components/Placeholder";

const Year = styled.div`
  font-size: 2rem;
  color: #fff;
`;

const ProjectYear = styled.div`
  margin-top: 2rem;
`;

const HorizontalLine = styled(Box)`
  flex-grow: 1;
  margin: 0.75rem 1rem 0 1rem;
`;

/**
 * An algorithm overview page
 * @returns {Component} The component
 */
class Frontpage extends React.PureComponent {
  componentDidMount = () => {
    const { fetchLatest } = this.props;

    fetchLatest();
  };

  render = () => {
    const { projects } = this.props;
    const projectByYear = {};

    projects.forEach(project => {
      if (typeof projectByYear[project.year] === "undefined") {
        projectByYear[project.year] = [project];
      } else {
        projectByYear[project.year].push(project);
      }
    });

    const keys = Object.keys(projectByYear);

    return (
      <div>
        <Helmet>
          <title>Nico Hauser</title>
        </Helmet>
        <Wrapper slider header footer>
          <Page>
            <Container>
              {keys.length > 0 ? (
                keys.sort((a, b) => b - a).map(year => (
                  <ProjectYear key={year}>
                    <Flex wrap>
                      <Box pr={2}>
                        <Year>{year}</Year>
                      </Box>
                      <HorizontalLine>
                        <hr />
                      </HorizontalLine>
                      <Box width={[1, 1, 4 / 6, 4 / 6]} pr={2}>
                        {projectByYear[year].map(project => (
                          <ProjectEntry key={project.slug} {...project} />
                        ))}
                      </Box>
                    </Flex>
                  </ProjectYear>
                ))
              ) : (
                <div>
                  <ProjectYear>
                    <Flex wrap>
                      <Box pr={2}>
                        <Year>2100</Year>
                      </Box>
                      <HorizontalLine>
                        <hr />
                      </HorizontalLine>
                      <Box width={[1, 1, 4 / 6, 4 / 6]} pr={2}>
                        <Placeholder height={20} />
                        <br />
                      </Box>
                    </Flex>
                  </ProjectYear>
                </div>
              )}
            </Container>
          </Page>
        </Wrapper>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  projects: getProjects(state)
});
const mapDispatchToProps = dispatch => ({
  /**
   * Fetches the latest projects
   * @returns {Promise} the fetch promise
   */
  fetchLatest() {
    return dispatch(fetchLatestProjects());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frontpage);

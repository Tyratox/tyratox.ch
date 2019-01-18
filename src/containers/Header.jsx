import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Helmet } from "react-helmet";
import { action as toggleBurgerMenuAction } from "redux-burger-menu";
import { MdMenu as MenuIcon } from "react-icons/md";

import { colors } from "../utilities/style";
import {
  getAuthenticatedUser,
  getAuthenticatedUserFetching
} from "../reducers";
import { resetJwtToken } from "../actions/authentication";
import { getBurgerMenuOpen } from "../reducers";
import Link from "../components/Link";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Flexbar from "../components/Flexbar";
import Push from "../components/Push";
import MediaQuery from "../components/MediaQuery";
import NavItem from "../components/NavItem";

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;

  z-index: 100;

  background-color: ${colors.background};
  color: ${colors.primary};
`;

/**
 * The page header
 * @returns {Component} The component
 */
class Header extends React.PureComponent {
  render = () => {
    const {
      isBurgerMenuOpen,
      toggleBurgerMenu,
      user: { username },
      fetchingUser,
      logout,
      preUser
    } = this.props;

    return (
      <HeaderWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="author" content="Nico Hauser" />
          <meta name="format-detection" content="telephone=no" />

          <title>Nico Hauser</title>
        </Helmet>
        <Navbar>
          <Container>
            <Flexbar>
              <NavItem>Nico Hauser</NavItem>
              <Push left>
                <MediaQuery md up>
                  <NavItem>
                    <Link to="/" color="#3498DB">
                      Projects
                    </Link>
                  </NavItem>
                  {/*<NavItem>
                    <Link to="/algorithms" color="#F8E81C">
                      Code
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/blog" color="#F39C12">
                      Blog
                    </Link>
                  </NavItem>*/}
                  <NavItem>
                    <Link to="/about" color={"#F39C12" /*"#1ABC9C"*/}>
                      About me
                    </Link>
                  </NavItem>
                </MediaQuery>
                <MediaQuery md down>
                  <NavItem onClick={toggleBurgerMenu}>
                    <MenuIcon size="25" />
                  </NavItem>
                </MediaQuery>
              </Push>
            </Flexbar>
          </Container>
        </Navbar>
      </HeaderWrapper>
    );
  };
}

Header.propTypes = {
  preUser: PropTypes.node
};

const mapStateToProps = state => ({
  isBurgerMenuOpen: getBurgerMenuOpen(state),
  user: getAuthenticatedUser(state) || {},
  fetchingUser: getAuthenticatedUserFetching(state)
});

const mapDispatchToProps = dispatch => ({
  /**
   * Toggles the burger menu
   * @param {boolean} open Whether the menu should be open afterwards
   * @returns {void}
   */
  toggleBurgerMenu(open) {
    return dispatch(toggleBurgerMenuAction(open));
  },
  /**
   * Logs a user out
   * @returns {void}
   */
  logout() {
    dispatch(resetJwtToken());
    dispatch(push("/login"));
  }
});

const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps) => ({
  ...mapStateToProps,
  ...mapDispatchToProps,
  ...ownProps,
  /**
   * Toggles the buger menu
   * @returns {void}
   */
  toggleBurgerMenu() {
    return mapDispatchToProps.toggleBurgerMenu(
      !mapStateToProps.isBurgerMenuOpen
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Header);

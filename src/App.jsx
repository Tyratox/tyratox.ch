import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//import Blog from "./containers/Blog";
import Frontpage from "./containers/Frontpage";
import About from "./containers/About";
/*import Page from "./containers/Page";
import Post from "./containers/Post";*/
import ScrollToTop from "./components/ScrollToTop";
import Algorithm from "./containers/Algorithm";
import Algorithms from "./containers/Algorithms";

/**
 * Renders the app
 * @param {Object} props The passed props
 * @returns {Component} The app component
 */
const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/about" component={About} />
            {/*<Route exact path="/blog" component={Blog} />*/}
            <Route exact path="/algorithms" component={Algorithms} />
            <Route
              exact
              path="/algorithm/:algorithmSlug"
              component={Algorithm}
            />
            {/*<Route exact path="/page/:pageSlug" component={Page} />
            <Route exact path="/post/:postSlug" component={Post} />*/}
          </ScrollToTop>
        </ConnectedRouter>
      </ParallaxProvider>
    </Provider>
  );
};

export default hot(module)(App);

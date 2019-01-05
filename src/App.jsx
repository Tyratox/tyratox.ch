import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

//containers
import Blog from "containers/Blog";
import Frontpage from "containers/Frontpage";
import Page from "containers/Page";
import Post from "containers/Post";
import ScrollToTop from "./components/ScrollToTop";
import Algorithm from "./containers/Algorithm";
import Algorithms from "./containers/Algorithms";

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/algorithms" component={Algorithms} />
          <Route exact path="/algorithm/:algorithmSlug" component={Algorithm} />
          <Route exact path="/page/:pageSlug" component={Page} />
          <Route exact path="/post/:postSlug" component={Post} />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);

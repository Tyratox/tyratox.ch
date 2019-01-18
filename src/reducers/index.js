import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as burgerMenu } from "redux-burger-menu";

import { wrap } from "../utilities/reducer";
import authentication, * as fromAuthentication from "./authentication";
import attachment, * as fromAttachment from "./attachment";
import page, * as fromPage from "./page";
import post, * as fromPost from "./post";
import algorithm, * as fromAlgorithm from "./algorithm";
import project, * as fromProject from "./project";
import eventType, * as fromEventType from "./event-type";

/**
 * Checks if the burger menu is open
 * @param {Object} state The redux state
 * @returns {boolean} Whether the burger menu is open
 */
export const getBurgerMenuOpen = state => state.burgerMenu.isOpen;

export const getIsAuthenticated = wrap(
  fromAuthentication.getIsAuthenticated,
  state => state.authentication
);

export const getIsAuthenticating = wrap(
  fromAuthentication.getIsAuthenticating,
  state => state.authentication
);

export const getAuthenticationStatus = wrap(
  fromAuthentication.getAuthenticationStatus,
  state => state.authentication
);

export const getAuthenticatedUser = wrap(
  fromAuthentication.getAuthenticatedUser,
  state => state.authentication
);
export const getAuthenticatedUserFetching = wrap(
  fromAuthentication.getAuthenticatedUserFetching,
  state => state.authentication
);
export const getAuthenticatedUserStatus = wrap(
  fromAuthentication.getAuthenticatedUserStatus,
  state => state.authentication
);

export const getAttachmentById = wrap(
  fromAttachment.getAttachmentById,
  state => state.attachment
);

export const getAttachments = wrap(
  fromAttachment.getAttachments,
  state => state.attachment
);

export const getPageById = wrap(fromPage.getPageById, state => state.page);
export const getPages = wrap(fromPage.getPages, state => state.page);

export const getPostById = wrap(fromPost.getPostById, state => state.post);
export const getPosts = wrap(fromPost.getPosts, state => state.post);

export const getAlgorithmBySlug = wrap(
  fromAlgorithm.getAlgorithmBySlug,
  state => state.algorithm
);
export const getAlgorithms = wrap(
  fromAlgorithm.getAlgorithms,
  state => state.algorithm
);

export const getProjectBySlug = wrap(
  fromProject.getProjectBySlug,
  state => state.project
);
export const getProjects = wrap(
  fromProject.getProjects,
  state => state.project
);

export const getEventTypeById = wrap(
  fromEventType.getEventTypeById,
  state => state.eventType
);
export const getEventTypes = wrap(
  fromEventType.getEventTypes,
  state => state.eventType
);

export default combineReducers({
  routing: routerReducer,
  burgerMenu,
  authentication,
  attachment,
  page,
  post,
  algorithm,
  project,
  eventType
});

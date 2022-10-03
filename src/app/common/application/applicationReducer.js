import { SET_CURRENT_PAGE, SET_ERROR, SET_SUCCESS } from "./ApplicationActions";

export function applicationReducer(
  state = {
    currentPage: 'home',
    error: false,
    success: false,
    message: ''
  },
  action
) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentPage: action.currentPage
      });

    case SET_ERROR:
      //console.log('invocato SET ERROR ');
      return Object.assign({}, state, {
        error: action.error,
        message: action.message
      });
    case SET_SUCCESS:
      //console.log('invocato SET SUCCESS ');
      return Object.assign({}, state, {
        success: action.success,
        message: action.message
      });
    default:
      return state;
  }
}

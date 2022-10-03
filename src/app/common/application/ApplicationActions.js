export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";


export function setCurrentPage(page) {
  return dispatch => {
    return dispatch({
      type: SET_CURRENT_PAGE,
      currentPage: page,
    });
  };
}

export function setError(data) {
  return dispatch => {
    return dispatch({
      type: SET_ERROR,
      error: data.error,
      message: data.message
    });
  };
}


export function setSuccess(data) {
  return dispatch => {
    return dispatch({
      type: SET_SUCCESS,
      success: data.success,
      message: data.message
    });
    //});
  };
}

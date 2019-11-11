const initialState = null;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      state = action.data;
      return state;
    case "REMOVE_NOTIFICATION":
      return initialState;
    default:
      return state;
  }
};

export const setNotification = (content, seconds) => {
  return dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data: content
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        data: null
      });
    }, seconds * 1000);
  };
};

export const removeNotification = () => {
  return dispatch => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
      notification: null
    });
  };
};

export default notificationReducer;

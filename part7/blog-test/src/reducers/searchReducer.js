export const searchChange = search => {
  return {
    type: "SET_SEARCH",
    search
  };
};

export const clearSearch = search => {
  return {
    type: "RESET_SEARCH",
    search
  };
};

const searchReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.search;
    case "RESET_SEARCH":
      return null;
    default:
      return state;
  }
};

export default searchReducer;

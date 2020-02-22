import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE": {
      return {
        ...state,
        [action.name]: action.value
      };
    }
    case "CHANGE_LIST": {
      return { ...state, list: action.value };
    }
    default:
      return state;
  }
};

export default reducer;

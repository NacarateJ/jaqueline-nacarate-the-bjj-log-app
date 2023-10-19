import { legacy_createStore as createStore } from "redux";

const initialState = {
  videos: [],
  searchResults: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, videos: action.payload };
    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;

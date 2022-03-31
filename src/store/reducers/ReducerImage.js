import {
    REQUEST_DATA,
    DONE_DATA,
    ERROR_DATA
  } from "../constans";

const initialState = {
    isFetching: false,
    api_req: [],
    errorMassage: ""
  };
  
  export const ImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_DATA: {
        return {
          ...state,
          isFetching: true
        };
      }
      case DONE_DATA: {
        return {
          ...state,
          isFetching: false,
          api_req: action.payload
        };
      }
      case ERROR_DATA: {
        return {
          ...state,
          isFetching: false,
          errorMassage: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
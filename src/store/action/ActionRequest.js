import {
    REQUEST_DATA,
    DONE_DATA,
    ERROR_DATA
  } from "../constans";
  
  export const RequestData = () => {
    return {
      type: REQUEST_DATA,
      isFetching: true
    };
  };
  
  export const DoneData = json => {
    return {
      type: DONE_DATA,
      isFetching: false,
      payload: json
    };
  };
  
  export const ErrorData = error => {
    return {
      type: ERROR_DATA,
      isFetching: false,
      payload: error
    };
  };
  
  export const ImagesRequestApi = () => async dispatch => {
    dispatch(RequestData());
  
    try {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`);
      const json = await response.json();
      dispatch(DoneData(json));
    } catch (error) {
      dispatch(ErrorData(error));
    }
  };
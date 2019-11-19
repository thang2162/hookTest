import React from "react";

export const initialState = { count: 0,
  cardTxt: 'This is a media card.',
  cartItems: [
    ],
searchTxt: '',
loadOnNav: false,
hasCameraPermission: null };

export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "scannerResult":
      //alert(action.cardTxt);
        return { ...state, cardTxt: action.result };
    case "cameraPermission":
        //alert(action.cardTxt);
        return { ...state, hasCameraPermission: action.status };
    default:
      //alert(action.cardTxt)
      return state;
  }
};

export const Context = React.createContext();

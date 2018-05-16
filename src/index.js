import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { pick } from "./js/pick";
import { logicA } from "./js/logicA";
import { logicB } from "./js/logicB";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Array.prototype.pick = pick;

const msg =
  "Pay attention to the numbers you see on the screen. Then click the numbers in the right order. Click here to continue";

const initialState = {
  lst: ["", "123", "", 3, logicA(), "keypadOff", "msgboxOn", msg]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var l = state.lst.slice();
      l[0] = l[0].concat(action.id);
      return {
        lst: l
      };
    case "DISPLAY":
      var l = state.lst.slice();
      l[2] = action.id;
      return {
        lst: l
      };
    case "SAVE_SHOWLIST":
      var l = state.lst.slice();
      l[1] = action.id;
      return {
        lst: l
      };
    case "RESET_PLAYLIST":
      var l = state.lst.slice();
      l[0] = "";
      return {
        lst: l
      };
    case "LEVEL_UP":
      var l = state.lst.slice();
      l[3] = l[3] + 1;
      return {
        lst: l
      };
    case "LEVEL_DOWN":
      var l = state.lst.slice();
      l[3] = l[3] - 1;
      return {
        lst: l
      };
    case "RESET_LEVEL":
      var l = state.lst.slice();
      l[3] = 3;
      return {
        lst: l
      };
    case "KEYPAD_ON":
      var l = state.lst.slice();
      l[5] = "keypadOn";
      return {
        lst: l
      };
    case "KEYPAD_OFF":
      var l = state.lst.slice();
      l[5] = "keypadOff";
      return {
        lst: l
      };
    case "BACKSPACE":
      var l = state.lst.slice();
      l[0] = l[0].slice(0, l[0].length - 1);
      return {
        lst: l
      };
    case "MSGBOX_OFF":
      var l = state.lst.slice();
      l[6] = "msgboxOff";
      return {
        lst: l
      };
    case "MSGBOX_ON":
      var l = state.lst.slice();
      l[6] = "msgboxOn";
      return {
        lst: l
      };
    case "CHANGE_MSG":
      var l = state.lst.slice();
      l[7] =
        "The test ends. Your working memory level is " +
        l[3] +
        ". Click here to retart";
      return {
        lst: l
      };
    case "RESET_LOGICA":
      var l = state.lst.slice();
      l[4] = logicA();
      return {
        lst: l
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

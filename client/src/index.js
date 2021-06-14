import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Provider} from "react-redux";
import { configureStore } from "./store";
import { setAuthToken, setCurrentUser } from "./store/actions/auth";

const store = configureStore();

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)

  try{
    store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
  }catch(e){
    store.dispatch(setCurrentUser({}))
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

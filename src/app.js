import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {
  addExpense,
  removeExpense,
  editExpense,
  startSetExpenses
} from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

// const expenseThree = store.dispatch(
//   addExpense({ description: "rent", amount: 1900, createdAt: 500 })
// );
// const expenseOne = store.dispatch(
//   addExpense({ description: "water bill", amount: 500, createdAt: 1000 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: "gas bill", amount: 800, createdAt: 600 })
// );

// // store.dispatch(setTextFilter(""));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

// ReactDOM.render(jsx, document.getElementById("app"));
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log("log in");
    // console.log("uid", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // history.push("/dashboard");
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    // console.log("log out");
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

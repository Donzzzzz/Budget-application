import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const expenseThree = store.dispatch(
  addExpense({ description: "rent", amount: 1900, createdAt: 500 })
);
const expenseOne = store.dispatch(
  addExpense({ description: "water bill", amount: 500, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "gas bill", amount: 800, createdAt: 600 })
);

// store.dispatch(setTextFilter(""));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

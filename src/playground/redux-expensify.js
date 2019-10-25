import { createStore, combineReducers } from "redux";

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 200, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300, createdAt: -11000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// store.dispatch(editExpense(expenseTwo.expenses.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: "ewqeadadas",
      description: "Rent",
      note: "Renting the house from 01/01/2019 to 01/03/2019",
      amount: 500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount/date",
    startDate: undefined,
    endDate: undefined
  }
};

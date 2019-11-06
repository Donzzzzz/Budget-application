import uuid from "uuid";
import database from "../firebase/firebase";

// Before: component calls action generator
//         action generator returns object
//         component dispatches obejct
//         redux store changes

// Now( using firebase ): component calls action generator
// action generator returns function
// component dispatches function(redux not allow to dispatch function, need to set a moudle, like middleware)
// functions runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
// export const addExpense = ({
//   description = "",
//   note = "",
//   amount = 0,
//   createdAt = 0
// } = {}) => ({
//   type: "ADD_EXPENSE",
//   expenses: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

// Asynchronous
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

// Read the data from the firebase, firebase using foreach to push all the expenses object into an array.
// Load it in app.js
// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};

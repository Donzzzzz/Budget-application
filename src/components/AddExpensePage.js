import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // console.log(expense);
    // console.log(expense.createdAt);
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>Add Expense</h2>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// const AddExpensePage = props => (
//   <div>
//     <h2>Add Expense</h2>
//     <ExpenseForm
//       onSubmit={expense => {
//         // console.log(expense);
//         // console.log(expense.createdAt);
//         // props.dispatch(addExpense(expense));
//         props.addExpense(expense);
//         props.history.push("/");
//       }}
//     />
//   </div>
// );

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
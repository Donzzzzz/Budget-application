import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    // console.log(expense);
    // console.log(expense.createdAt);
    // props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
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
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);

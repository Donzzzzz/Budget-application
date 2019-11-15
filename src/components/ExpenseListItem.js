import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";

// Using destructuring
export const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
  </Link>
);

// const ExpenseListItem = props => (
//   <div>
//     <h3>{props.expense.description}</h3>
//     <p>
//       {props.expense.amount} - {props.expense.createdAt}
//     </p>
//     <button
//       onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//       }}
//     >
//       Remove
//     </button>
//   </div>
// );

export default connect()(ExpenseListItem);

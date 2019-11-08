import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => {
  return (
    <header>
      <Link to="/dashboard">
        <h1>Budget</h1>
      </Link>
      {/* <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink> */}
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);

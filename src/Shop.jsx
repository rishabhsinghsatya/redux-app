import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Money</h4>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </button>
      Add to cart
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;

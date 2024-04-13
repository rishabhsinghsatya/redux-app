import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

const Shop = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h4>Money</h4>
      <button
        className="btn btn-primary"
        onClick={() => {
          //   action.withdrawMoney(100);
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Add to cart
      <button
        className="btn btn-primary"
        onClick={() => {
          //   action.depositMoney(100);
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;

import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { connect } from "react-redux";

const iceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy ICECREAM</button>
    </div>
  );
};


//useSelector
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
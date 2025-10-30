import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/Cake/cakeAction.cjs";
import { buyIcecream } from "./redux/Icecream/icecreamAction.cjs";

function ItemConainer(props) {
    return (
        <div>
            <h2>Item - { props.item }</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
};

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIcecream;
    return {
        item:itemState
    }
};

const mapDispatchToProps = (dispatch,ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
    return{
        buyItem:dispatchFunction
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (ItemConainer)
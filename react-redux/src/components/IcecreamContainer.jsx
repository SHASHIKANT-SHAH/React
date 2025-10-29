import { buyIcecream } from "./redux/Icecream/icecreamAction.cjs"
import { connect } from 'react-redux'

function IcecreamContainer(props) {
    return (
        <div>
            <h3>Number of cakes - {props.numOfIcecream}</h3>
            <button onClick={props.buyIcecream}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecream:state.iceCream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIcecream:() => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IcecreamContainer);
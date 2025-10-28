import { buyCake } from "./redux/Cake/cakeAction.cjs"
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h3>Number of cake - {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
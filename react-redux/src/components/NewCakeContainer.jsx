import { useState } from "react"
import { buyCake } from "./redux/Cake/cakeAction.cjs"
import { connect } from 'react-redux'

function NewCakeContainer(props) {
   const [number,setNumber] = useState(1);
    return (
        <div>
            <h3>Number of cakes - {props.numOfCakes}</h3>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake:number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer);
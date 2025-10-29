import { useSelector,useDispatch } from "react-redux"
import { buyCake } from "./redux/Cake/cakeAction.cjs";

function HooksCake(){
    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch()
    return(
        <div>
            <h3>Number of cakes {numOfCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>BuyCake</button>
        </div>
    )
}

export default HooksCake
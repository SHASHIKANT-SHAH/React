import { BUY_CAKE } from "./cakeType.cjs"

export const buyCake = (number=1) => {
    return {
        type:BUY_CAKE,
        payload: number
    }
}
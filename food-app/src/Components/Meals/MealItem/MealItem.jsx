import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/CartContext';
import { useContext } from 'react';

const MealItem = props => {
    // 1. Context Access: CartContext से addItem फ़ंक्शन मिलता है।
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    // MealItemForm से quantity मिलने पर यह फ़ंक्शन कॉल होता है।
    const addToCartHandler = quantity => {
        // 2. Context Call: addItem फ़ंक्शन को सभी ज़रूरी डेटा के साथ कॉल करता है।
        // (ID, नाम, मात्रा, कीमत)
        cartCtx.addItem({
            id: props.id,
            name: props.name, // आइटम का नाम
            quantity:quantity, // MealItemForm से मिली मात्रा
            price:props.price
        });
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                {/* onAddToCart प्रॉप को addToCartHandler फ़ंक्शन पास किया जाता है। */}
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
    // 1. Context Access: useContext(CartContext) पूरे ऐप से ग्लोबल कार्ट डेटा (items, totalAmount, addItem, removeItem) को खींच लेता है।
    const CartCtx = useContext(CartContext); 
    
    // 2. Calculating the Badge Number:
    // .reduce() एक Array method है जो array के सभी मानों को एक सिंगल मान में बदल देता है।
    const numberOfCartItems = CartCtx.items.reduce((curNumber,item)=> {
        // curNumber (current number): यह अब तक जोड़े गए आइटम की कुल संख्या है। यह 0 से शुरू होता है।
        // item.quantity: यह वर्तमान में प्रोसेस हो रहे आइटम की मात्रा (जैसे: सुशी की 2 प्लेट) है।
        return curNumber + item.quantity // हर आइटम की मात्रा को कुल योग (curNumber) में जोड़ा जाता है।
    },0) // 0: यह वह शुरुआती मान है जिससे गणना (calculation) शुरू होती है।

    return(
        // onClick: जब इस बटन पर क्लिक होता है, तो यह prop (App.js से आया हुआ) Cart Modal को खोलता है।
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            {/* 3. Displaying the Number: Reducer द्वारा कैलकुलेट किया गया अंतिम नंबर यहां दिखाया जाता है। */}
            <span className={classes.badge}>{numberOfCartItems}</span> 
        </button>
    );
};

export default HeaderCartButton;

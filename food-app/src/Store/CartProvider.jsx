import { useReducer } from "react";
import CartContext from "./CartContext";

// 1. Initial State: कार्ट जब शुरू होता है, तो वह ऐसा दिखता है।
const defaultCartState = {
    items: [],
    totalAmount: 0,
};

// 2. Reducer Function: यही वह लॉजिक है जो स्टेट को अपडेट करता है (जैसे कि डेटाबेस में बदलाव)।
const cartReducer = (state, action) => {
    // अगर एक्शन 'ADD' है (यानी कोई आइटम जोड़ना है)
    if (action.type === 'ADD') {
        // नया टोटल अमाउंट कैलकुलेट किया जाता है।
        const updatedTotalAmount = 
            state.totalAmount + action.item.price * action.item.quantity;

        // चेक किया जाता है कि आइटम पहले से कार्ट में है या नहीं।
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            // A. आइटम पहले से है: केवल उसकी मात्रा (amount) अपडेट करो।
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
            };
            updatedItems = [...state.items]; // मौजूदा आइटम्स की कॉपी बनाओ
            updatedItems[existingCartItemIndex] = updatedItem; // उस इंडेक्स पर नया आइटम डालो
        } else {
            // B. आइटम नया है: .concat() का उपयोग करके इसे लिस्ट में जोड़ो।
            updatedItems = state.items.concat(action.item); 
        }

        // नया स्टेट वापस करो (यह Reducer का अंतिम आउटपुट है)।
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    // REMOVE लॉजिक यहाँ आएगा...
    return defaultCartState;
};

// 3. Provider Component: यह कंपोनेंट Context को मैनेज करता है।
const CartProvider = props => {
    // useReducer: Reducer लॉजिक का उपयोग करके स्टेट (cartState) और Dispatchर (dispatchCartAction) को सेट करता है।
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer, 
        defaultCartState
    );
    
    // यह फ़ंक्शन Context के addItem फ़ंक्शन से कॉल होगा।
    const addItemToCartHandler = (item) => {
        // Reducer को 'ADD' एक्शन भेजता है।
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    // Context Value: Reducer से मिली स्टेट और फ़ंक्शन को एक ऑब्जेक्ट में पास किया जाता है।
    const cartContextValue = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemCartHandler
    }

    // Context.Provider: पूरे ऐप में वैल्यू उपलब्ध कराता है।
    return (
        <CartContext.Provider value={cartContextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
import React from "react";

// Context Object बनाया गया। यह वह 'टोकन' है जिसका उपयोग कंपोनेंट स्टेट एक्सेस करने के लिए करेंगे।
const CartContext = React.createContext({
    // ये डिफ़ॉल्ट वैल्यू हैं जो IDE को ऑटो-कंप्लीशन में मदद करती हैं।
    items:[], 
    totalAmount:0,
    addItem:(item)=>{}, // कार्ट में आइटम जोड़ने का फ़ंक्शन
    removeItem:(id)=> {} // कार्ट से आइटम हटाने का फ़ंक्शन
});

export default CartContext;
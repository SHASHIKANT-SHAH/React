import { useState } from "react";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import "./style.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    const existing = cart.find((item) => item.id === shoe.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (shoeId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <ShoeList onAddToCart={handleAddToCart} />
      <Cart cartItems={cart} onRemove={handleRemoveFromCart} onAdd={handleAddToCart} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Page.css";
import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";

const Home = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updateCart = cart
      .map((c) => (c.id === itemId ? { ...c, quantity: c.quantity - 1 } : c))
      .filter((c) => c.quantity > 0);
    setCart(updateCart);
  };
  return (
    <div>
      <div className="page home-page">
        <h1>Welcome to My React Website</h1>
        <p>
          This is a simple demo of React Router. You can navigate to different
          pages using the links in the header.
        </p>
        <button className="explore-btn">Explore More</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          background: "#f7f7f7",
          padding: "10px",
        }}
      >
        <ProductList onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cart}
          onRemove={handleRemoveFromCart}
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Home;

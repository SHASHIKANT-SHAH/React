function Cart({ cartItems, onRemove, onAdd }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>{'\u{1F6D2}'} Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
           <img src={item.image} alt={item.name} width="40"/>
           <strong>{item.name}</strong> <br />
            <span>Price ₹{item.price.toLocaleString("en-IN")}</span>
            <div>
            <button onClick={() => onRemove(item.id)}>-</button>
              <span style={{padding:5}}> {item.quantity} </span>
            <button onClick={()=> onAdd(item)}>+</button>
            </div>
          </div>
        ))
      )}
      <h3 className="total">
        Total: ₹{total.toLocaleString("en-IN")}
      </h3>
    </div>
  );
}

export default Cart;

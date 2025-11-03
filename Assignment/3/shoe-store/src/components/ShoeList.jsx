const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/g/b/-original-imahgcs8pdqyjhn9.jpeg?q=70",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 140,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/u/7/10-nit62-10-adidas-ftwwht-halsil-lucred-original-imahdane4edhmyud.jpeg?q=70",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 100,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/y/l/3-5-380462-01-3-5-puma-white-tigerlily-original-imah7zd9duvrheby.jpeg?q=70",
  },
];
function ShoeList({ onAddToCart }) {
  return (
    <div className="shoe-list">
      <h2>{'\u{1F45F}'} Available Shoes</h2>
      {shoes.map((shoe) => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} />
          <div className="shoe-details">
            <h4>{shoe.name}</h4>
            <p className="price">₹{shoe.price.toLocaleString("en-IN")}</p>
            <button onClick={() => onAddToCart(shoe)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
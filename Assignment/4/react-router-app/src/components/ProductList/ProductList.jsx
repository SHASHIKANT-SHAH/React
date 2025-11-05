const shoes = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/g/b/-original-imahgcs8pdqyjhn9.jpeg?q=70",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 140,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/u/7/10-nit62-10-adidas-ftwwht-halsil-lucred-original-imahdane4edhmyud.jpeg?q=70",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 100,
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/y/l/3-5-380462-01-3-5-puma-white-tigerlily-original-imah7zd9duvrheby.jpeg?q=70",
  },
];

const ProductList = (params) => {
  return (
    <div style={{ flex: "1" }}>
      <h2 style={{ marginBottom: "15px", color: "#111827" }}>
        {"\u{1F45F}"} Available Shoes
      </h2>
      {shoes.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "15px",
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "15px",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease",
            justifyContent: "space-between",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              borderRadius: "10px",
              width: "90px",
              height: "90px",
              objectFit: "cover",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
          <div>
            <h4 style={{ marginBottom: "5px" }}>{item.name}</h4>
            <p
              style={{
                fontWeight: "600",
                color: "#16a34a",
                marginBottom: "10px",
              }}
            >
              ₹{item.price.toLocaleString("en-IN")}
            </p>
            <button
              onClick={() => params.onAddToCart(item)}
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                backgroundColor: "#4f46e5",
                color: "#fff",
                borderRadius: "14px",
                padding: "10px 30px",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

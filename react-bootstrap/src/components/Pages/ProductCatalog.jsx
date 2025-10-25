import React, { useState } from "react";
import "../../styles/ProductCatalog.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Modal,
  Image,
} from "react-bootstrap";

// ✅ Sample Product Data
const productsData = [
  {
    id: 1,
    title: "Elegant Kurti",
    category: "Ethnic",
    price: 999,
    img: "https://placehold.co/400x250?text=Kurti",
    desc: "Soft cotton kurti for daily comfort and elegance.",
    details:
      "This kurti is made from pure cotton fabric with breathable texture. Ideal for office and casual wear.",
  },
  {
    id: 2,
    title: "Designer Saree",
    category: "Ethnic",
    price: 2999,
    img: "https://placehold.co/400x250?text=Saree",
    desc: "Premium silk saree with zari border.",
    details:
      "Crafted from premium Banarasi silk with zari woven border. Great for weddings and festive occasions.",
  },
  {
    id: 3,
    title: "Western Top",
    category: "Western",
    price: 799,
    img: "https://placehold.co/400x250?text=Top",
    desc: "Trendy western top for modern women.",
    details:
      "Cotton-poly blend fabric, soft touch, and trendy fit. Perfect for casual wear.",
  },
  {
    id: 4,
    title: "Anarkali Dress",
    category: "Ethnic",
    price: 1799,
    img: "https://placehold.co/400x250?text=Anarkali",
    desc: "Beautiful embroidered anarkali set.",
    details:
      "Floor-length anarkali suit with embroidery work. Flowy fabric for special events.",
  },
  {
    id: 5,
    title: "Formal Kurta",
    category: "Office",
    price: 899,
    img: "https://placehold.co/400x250?text=Kurta",
    desc: "Perfect for office or meetings.",
    details:
      "Simple solid kurta with elegant neckline and side slits. Great for daily professional wear.",
  },
  {
    id: 6,
    title: "Blazer Suit",
    category: "Office",
    price: 4999,
    img: "https://placehold.co/400x250?text=Blazer",
    desc: "Smart formal wear for business look.",
    details:
      "Tailored-fit blazer and trouser set. Fine stitching and high-quality fabric.",
  },
];

export default function ProductCatalog() {
  // ✅ States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  // ✅ Filter Logic
  const filteredProducts = productsData.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.price <= maxPrice
  );

  return (
    <Container className="my-5">
      {/* 🔹 Title */}
      <h2 className="text-center fw-bold mb-4">Our Product Catalog</h2>

      <Row>
        {/* 🔹 LEFT FILTER PANEL */}
        <Col md={3} className="mb-4">
          <div className="p-3 bg-light rounded shadow-sm">
            <h5 className="fw-semibold mb-3">Filters</h5>

            {/* Category Filter */}
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All</option>
                <option>Ethnic</option>
                <option>Western</option>
                <option>Office</option>
              </Form.Select>
            </Form.Group>

            {/* Price Range Filter */}
            <Form.Group>
              <Form.Label>Max Price: ₹{maxPrice}</Form.Label>
              <Form.Range
                min={500}
                max={5000}
                step={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </Form.Group>
          </div>
        </Col>

        {/* 🔹 RIGHT PRODUCT GRID */}
        <Col md={9}>
          <Row className="g-4">
            {filteredProducts.map((item) => (
              <Col key={item.id} sm={12} md={6} lg={4}>
                <Card className="product-card h-100 border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    className="img-fluid rounded-top"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="small text-muted">{item.desc}</Card.Text>
                    <h6 className="fw-bold text-primary mb-3">₹{item.price}</h6>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleShow(item)}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            {filteredProducts.length === 0 && (
              <div className="text-center text-muted mt-4">
                <p>No products found within selected filters.</p>
              </div>
            )}
          </Row>
        </Col>
      </Row>

      {/* 🔹 MODAL POPUP FOR DETAILS */}
      <Modal show={show} onHide={handleClose} centered>
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                src={selectedProduct.img}
                alt={selectedProduct.title}
                fluid
                rounded
                className="mb-3"
              />
              <p>{selectedProduct.details}</p>
              <h5 className="text-primary fw-semibold">
                Price: ₹{selectedProduct.price}
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Order Now</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

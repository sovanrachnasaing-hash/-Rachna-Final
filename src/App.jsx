import { useState } from "react";
import "./App.css";

const products = [
  {
    name: "Sunflower Bouquet",
    price: 25,
    image:
      "https://images.pexels.com/photos/32300948/pexels-photo-32300948.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Colorful Rose Bouquet",
    price: 20,
    image:
      "https://images.pexels.com/photos/15290943/pexels-photo-15290943.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Pink & White Bouquet",
    price: 35,
    image:
      "https://images.pexels.com/photos/34474071/pexels-photo-34474071.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Mixed Bouquet",
    price: 28,
    image:
      "https://images.pexels.com/photos/37423752/pexels-photo-37423752.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Pink Rose Bouquet",
    price: 25,
    image:
      "https://images.pexels.com/photos/37523653/pexels-photo-37523653.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "White & Yellow Bouquet",
    price: 25,
    image:
      "https://images.pexels.com/photos/667320/pexels-photo-667320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Red Rose Bouquet",
    price: 30,
    image:
      "https://images.pexels.com/photos/36147881/pexels-photo-36147881.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Lily Bouquet",
    price: 30,
    image:
      "https://images.pexels.com/photos/20744187/pexels-photo-20744187.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCustomer = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleCard = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill in all customer information.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setShowCheckout(false);
    setShowCart(false);
    setShowSuccess(true);
  };

  const finishOrder = () => {
    setShowSuccess(false);
    setCart([]);
    setCustomer({
      name: "",
      phone: "",
      address: "",
    });
    setCard({
      name: "",
      number: "",
      expiry: "",
      cvv: "",
    });
    setPaymentMethod("Cash on Delivery");
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <header>
        <a href="#Home" className="logo">
          Flower<span>.</span>
        </a>

        <nav className="navbar">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Products">Products</a>
          <a href="#Contact">Contact</a>
        </nav>

        <div className="icons">
          <a href="#wishlist">
            <i className="fas fa-heart"></i>
          </a>

          <a
            href="#cart"
            id="cart-icon"
            onClick={(e) => {
              e.preventDefault();
              setShowCart(true);
            }}
          >
            <i className="fas fa-shopping-cart"></i>

            <span className="cart-count">
              {cart.length}
            </span>
          </a>

          <a href="#Contact">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </header>

      {/* ================= HOME ================= */}

      <section className="home" id="Home">
        <div className="home-content">
          <h1>Flower Store</h1>

          <span>Natural and Beautiful Flowers</span>

          <p>
            Welcome to our flower shop, where every beautiful bloom
            is carefully selected and arranged to bring love,
            happiness, and unforgettable moments to every special
            occasion.
          </p>

          <a href="#Products" className="btn">
            Order Now
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="About">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        <div className="about-row">
          <div className="video-container">
            <video
              src="/6014859_Flower_Garden_1920x1080.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>

            <div className="best-seller">
              <img
                src="https://images.pexels.com/photos/36147881/pexels-photo-36147881.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Red Rose"
              />

              <h3>🌹 Best Flower Seller 🌹</h3>
            </div>
          </div>

          <div className="about-content">
            <h2>Why Choose Us?</h2>

            <p>
              We provide fresh, beautiful, and carefully arranged
              flowers for every special occasion. Our bouquets are
              made with love and attention to detail using
              high-quality flowers to make your moments more
              memorable.
            </p>

            <p>
              With affordable prices, reliable delivery, and
              friendly service, we are here to make every order
              special.
            </p>

            <a href="#Products" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="features">
        <div className="feature">
          <i className="fas fa-truck"></i>
          <h3>Free Delivery</h3>
          <p>On all orders</p>
        </div>

        <div className="feature">
          <i className="fas fa-rotate-left"></i>
          <h3>10 Day Returns</h3>
          <p>Money back guarantee</p>
        </div>

        <div className="feature">
          <i className="fas fa-tag"></i>
          <h3>Special Discounts</h3>
          <p>Great prices every day</p>
        </div>

        <div className="feature">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section id="Products">
        <h1 className="heading">
          Latest <span>Products</span>
        </h1>

        <div className="container">
          {products.map((product, index) => (
            <div className="card1" key={index}>
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <div className="container-price">
                <div className="price">
                  ${product.price}
                </div>

                <div className="product-icons">
                  <i
                    className="fas fa-shopping-cart add-to-cart"
                    onClick={() => addToCart(product)}
                  ></i>

                  <i className="fas fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CART ================= */}

      <div
        className={`cart-box ${showCart ? "active" : ""}`}
        id="cart-box"
      >
        <div className="cart-header">
          <h2>Your Cart</h2>

          <i
            className="fas fa-times"
            id="close-cart"
            onClick={() => setShowCart(false)}
          ></i>
        </div>

        <div className="cart-items" id="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <p>${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <span>Total:</span>

          <span>
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          className="checkout-btn"
          onClick={() => {
            if (cart.length === 0) {
              alert("Your cart is empty.");
              return;
            }

            setShowCheckout(true);
          }}
        >
          <i className="fas fa-credit-card"></i>
          Checkout / Place Order
        </button>

        {/* ================= CHECKOUT ================= */}

        <div
          className={`checkout-box ${
            showCheckout ? "active" : ""
          }`}
          id="checkout-box"
        >
          <h2>Place Your Order</h2>

          <label htmlFor="customer-name">
            Your Name
          </label>

          <input
            type="text"
            id="customer-name"
            name="name"
            placeholder="Enter your name"
            value={customer.name}
            onChange={handleCustomer}
          />

          <label htmlFor="customer-phone">
            Phone Number
          </label>

          <input
            type="tel"
            id="customer-phone"
            name="phone"
            placeholder="Enter phone number"
            value={customer.phone}
            onChange={handleCustomer}
          />

          <label htmlFor="customer-address">
            Delivery Address
          </label>

          <input
            type="text"
            id="customer-address"
            name="address"
            placeholder="Enter delivery address"
            value={customer.address}
            onChange={handleCustomer}
          />

          <label htmlFor="payment-method">
            Payment Method
          </label>

          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
          >
            <option value="Cash on Delivery">
              Cash on Delivery
            </option>

            <option value="ABA">
              ABA
            </option>

            <option value="ACLEDA">
              ACLEDA
            </option>

            <option value="Credit / Debit Card">
              Credit / Debit Card
            </option>
          </select>

          {/* ================= CARD PAYMENT ================= */}

          {paymentMethod === "Credit / Debit Card" && (
            <div
              className="card-payment active"
              id="card-payment"
            >
              <h3>
                <i className="fas fa-credit-card"></i>
                Card Payment
              </h3>

              <div className="bank-card">
                <div className="bank-card-top">
                  <span>FLOWER SHOP</span>
                  <i className="fas fa-wifi"></i>
                </div>

                <div className="bank-card-number">
                  **** **** **** ****
                </div>

                <div className="bank-card-bottom">
                  <div>
                    <small>CARD HOLDER</small>

                    <strong>
                      {card.name || "YOUR NAME"}
                    </strong>
                  </div>

                  <div>
                    <small>EXPIRES</small>

                    <strong>
                      {card.expiry || "MM/YY"}
                    </strong>
                  </div>
                </div>
              </div>

              <label>
                Card Holder Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Card holder name"
                value={card.name}
                onChange={handleCard}
              />

              <label>
                Card Number
              </label>

              <input
                type="text"
                name="number"
                maxLength="19"
                placeholder="1234 5678 9012 3456"
                value={card.number}
                onChange={handleCard}
              />

              <div className="card-row">
                <div>
                  <label>Expiry</label>

                  <input
                    type="text"
                    name="expiry"
                    maxLength="5"
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={handleCard}
                  />
                </div>

                <div>
                  <label>CVV</label>

                  <input
                    type="password"
                    name="cvv"
                    maxLength="3"
                    placeholder="123"
                    value={card.cvv}
                    onChange={handleCard}
                  />
                </div>
              </div>
            </div>
          )}

          <button
            className="place-order"
            id="place-order-btn"
            onClick={placeOrder}
          >
            <i className="fas fa-check"></i>
            Place Order
          </button>

          <button
            className="cancel-btn"
            id="cancel-order-btn"
            onClick={() => setShowCheckout(false)}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* ================= SUCCESS ================= */}

      <div
        className={`success-overlay ${
          showSuccess ? "active" : ""
        }`}
        id="success-overlay"
      >
        <div className="success-card">
          <div className="success-icon">
            <i className="fas fa-check"></i>
          </div>

          <h2>Order Successful!</h2>

          <p className="success-message">
            Thank you for your order.
          </p>

          <div className="order-details">
            <div>
              <span>Customer</span>
              <strong>{customer.name}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{customer.phone}</strong>
            </div>

            <div>
              <span>Address</span>
              <strong>{customer.address}</strong>
            </div>

            <div>
              <span>Payment</span>
              <strong>{paymentMethod}</strong>
            </div>

            <div className="success-total">
              <span>Total</span>

              <strong>
                ${total.toFixed(2)}
              </strong>
            </div>
          </div>

          <button
            className="done-btn"
            id="done-btn"
            onClick={finishOrder}
          >
            Done
          </button>
        </div>
      </div>

      {/* ================= CONTACT ================= */}

      <section id="Contact">
        <h1 className="heading">
          Contact <span>Us</span>
        </h1>

        <div className="contact-box">
          <input
            type="text"
            placeholder="First Name"
          />

          <input
            type="text"
            placeholder="Last Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <h2>Flower Shop 🌸</h2>

        <p>📍 Terk Tla, Phnom Penh</p>

        <p>📞 09640384</p>

        <p>✉️ user23@gmail.com</p>

        <p>
          © 2025 Flower Shop. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
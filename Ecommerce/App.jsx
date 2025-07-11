import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import CartModal from "./components/CartModal";
import OrderHistory from "./components/OrderHistory";
import productsData from "./data/product";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuy = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const deliveryTime = Math.floor(Math.random() * 3) + 1;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const order = {
      items: cart,
      total,
      date: new Date(),
      deliveryTime,
    };
    setOrderHistory([order, ...orderHistory]);
    setCart([]);
    alert(`Order placed for ₹${total.toFixed(2)}. Delivered in ${deliveryTime} day(s)`);
  };

  return (
    <div>
      <Header
        cartCount={cart.length}
        onSearch={setSearch}
        onShowCart={() => setShowCart(true)}
        onShowHistory={() => setShowHistory(true)}
      />

      <div className="product-grid">
        {filteredProducts.map((p, idx) => (
          <ProductCard
            key={idx}
            product={p}
            onBuy={handleBuy}
            onShowDetails={() => setSelectedProduct(p)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBuy={handleBuy}
        />
      )}

      {showCart && (
        <CartModal
          cart={cart}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
        />
      )}

      {showHistory && (
        <OrderHistory
          orders={orderHistory}
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  );
}

export default App;

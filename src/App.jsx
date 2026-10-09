
import { useState, useEffect } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    console.log("Amazon Product Store is ready");

    return () => {
      console.log("App component cleanup");
    };
  }, []);

  const addToCart = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const removeOne = () => {
    setQuantity((previousQuantity) =>
      Math.max(0, previousQuantity - 1)
    );
  };

  const resetCart = () => {
    setQuantity(0);
  };

  return (
    <div className="app">
      <Header />

      <main>
        <button
          className="toggle-button"
          onClick={() => setShowProduct((previous) => !previous)}
        >
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            name="Wireless Mouse"
            price={499}
            quantity={quantity}
            color={selectedColor}
            setColor={setSelectedColor}
            city={deliveryCity}
            setCity={setDeliveryCity}
            addToCart={addToCart}
            removeOne={removeOne}
            resetCart={resetCart}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;


import { useEffect } from "react";

function ProductCard({
  name,
  price,
  quantity,
  color,
  setColor,
  city,
  setCity,
  addToCart,
  removeOne,
  resetCart
}) {
  useEffect(() => {
    console.log("ProductCard mounted or updated");
  }, [quantity, color, city]);

  const total = quantity * price;

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <label>Choose Colour: </label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>Selected Colour: {color}</p>

      <label>Delivery City: </label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <p>Delivery to: {city}</p>
      <p>Quantity: {quantity}</p>

      <div className="buttons">
        <button onClick={addToCart}>
          Add to Cart
        </button>

        <button onClick={removeOne} disabled={quantity === 0}>
          Remove One
        </button>

        <button onClick={resetCart}>
          Reset Cart
        </button>
      </div>

      <h3>Total: ₹{total}</h3>

      <p className={quantity === 0 ? "empty" : "success"}>
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
    </div>
  );
}

export default ProductCard;

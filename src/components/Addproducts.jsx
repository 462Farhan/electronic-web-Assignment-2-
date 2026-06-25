import { useState } from "react";
import { supabase } from "./supabase";

export default function Addproducts() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

async function handleSubmit(e) {
  e.preventDefault();

  console.log(product);

  const { data, error } = await supabase
    .from("eprod")
    .insert({
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
    });
    alert("Product added")

  console.log("Data:", data);
  console.log("Error:", error);
}

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Add New Product</h1>
        <p style={styles.subHeading}>
          Fill in the details below to add a new product.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Category</option>
            <option value="Laptops">Laptops</option>
            <option value="Phones">Phones</option>
            <option value="Headphones">Headphones</option>
            <option value="Watches">Watches</option>
            <option value="Accessories">Accessories</option>
          </select>

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            style={styles.textarea}
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={product.stock}
            onChange={handleChange}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#444";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#111";
            }}
           
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)",
    padding: "40px",
  },

  card: {
    width: "500px",
    background: "#fff",
    borderRadius: "18px",
    padding: "35px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
  },

  heading: {
    textAlign: "center",
    color: "#222",
    marginBottom: "8px",
    fontSize: "32px",
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
  },

  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "100px",
    resize: "vertical",
    outline: "none",
  },

  button: {
    marginTop: "10px",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "bold",
  },
};
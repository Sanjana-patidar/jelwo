import React, { useEffect, useState } from "react";
import "./AdminProduct.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://jelwo.onrender.com/api/products";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // → Navigate to edit page
  const handleEdit = (p) => {
    navigate(`/admin/addproduct?id=${p._id}`);
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchProducts();
  };

  return (
    <div className="admin-product-page">

      <div className="top-bar d-flex justify-content-between align-items-center">
        <h2>All Products</h2>

        <Link to="/admin/addproduct">
          <button className="addbtn">Add Product</button>
        </Link>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img src={`https://jelwo.onrender.com/uploads/${p.frontImg}`} />

            <h3>{p.title}</h3>

            <p>
              <span className="price">Rs. {p.price}</span>
              {p.discount && <span className="discount"> -{p.discount}%</span>}
            </p>

            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Edit
              </button>

              <button className="delete-btn" onClick={() => handleDelete(p._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default AdminProduct;

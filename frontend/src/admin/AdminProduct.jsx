import React, { useEffect } from "react";
import { useState } from "react";
import "./AdminProduct.css";
import axios from "axios";
const API = "http://localhost:5000/api/products";
const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    frontImg: null,
    backImg: null,
    price: "",
    discount: "",
    rating: "",
    discountPercentage: "",
    title: "",
  });
  const [editId, setEditId] = useState(null);

  //fetch products from api
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data); // res.data MUST be array from backend
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("frontImg", form.frontImg);
    formData.append("backImg", form.backImg);
    formData.append("price", form.price);
    formData.append("discount", form.discount);
    formData.append("rating", form.rating);
    formData.append("discountPercentage", form.discountPercentage);
    formData.append("title", form.title);

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${API}/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
});
      }

      setForm({
        frontImg: null,
        backImg: null,
        price: "",
        discount: "",
        rating: "",
        discountPercentage: "",
        title: "",
      });
      setEditId(null);
      fetchProducts();
    } catch (err) {
      console.error("Submit Error", err);
    }
  };

  // Edit product
  const handleEdit = (p) => {
    setForm({
      frontImg: null,
      backImg: null,
      price: p.price,
      discount: p.discount,
      rating: p.rating,
      discountPercentage: p.discountPercentage,
      title: p.title,
    });
    setEditId(p._id);
  };

  // Delete product
  const handleDelete = async (_id) => {
    await axios.delete(`${API}/${_id}`);
    fetchProducts();
  };

  return (
    <div className="admin-product-page">
      <h1 className="text-danger">🛒 Admin Product Management</h1>

      {/* Product Form */}
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, frontImg: e.target.files[0] })}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, backImg: e.target.files[0] })}
        />

        <input
          type="number"
          placeholder="Price (Rs)"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Discount "
          value={form.discount}
          onChange={(e) => setForm({ ...form, discount: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
        <input
          type="number"
          placeholder="Discount percentage "
          value={form.discountPercentage}
          onChange={(e) =>
            setForm({ ...form, discountPercentage: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Title of the product "
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <button type="submit">
          {editId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img
              className=""
              src={`http://localhost:5000/uploads/${p.frontImg}`}
              alt={p.frontImg}
            />
            <h3>{p.title}</h3>
            <p>
              <span className="price">Rs. {p.price}</span>
              {p.discount && <span className="discount"> -{p.discount}%</span>}
            </p>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(p)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(p._id)}
              >
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

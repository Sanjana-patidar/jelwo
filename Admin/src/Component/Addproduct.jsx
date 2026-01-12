import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminProduct.css";

const API = `${import.meta.env.VITE_API_URL}/products`;

const Addproduct = () => {
  const [form, setForm] = useState({
    frontImg: null,
    backImg: null,
    price: "",
    discount: "",
    rating: "",
    discountPercentage: "",
    title: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const id = new URLSearchParams(location.search).get("id");

  // LOAD PRODUCT WHEN EDITING
  useEffect(() => {
    if (id) {
      axios.get(`${API}/${id}`).then((res) => {
        setForm({
          frontImg: null,
          backImg: null,
          price: res.data.price,
          discount: res.data.discount,
          rating: res.data.rating,
          discountPercentage: res.data.discountPercentage,
          title: res.data.title,
        });
      });
    }
  }, [id]);

  // ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("frontImg", form.frontImg);
    fd.append("backImg", form.backImg);
    fd.append("price", form.price);
    fd.append("discount", form.discount);
    fd.append("rating", form.rating);
    fd.append("discountPercentage", form.discountPercentage);
    fd.append("title", form.title);

    try {
      if (!id) {
        await axios.post(`${API}/add`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.put(`${API}/${id}`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      navigate("/admin/adminproducts");

    } catch (err) {
      console.error("Submit Error", err);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>

      <h2>{id ? "Update Product" : "Add Product"}</h2>

      <input
        type="file"
        onChange={(e) => setForm({ ...form, frontImg: e.target.files[0] })}
      />

      <input
        type="file"
        onChange={(e) => setForm({ ...form, backImg: e.target.files[0] })}
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        type="number"
        placeholder="Discount"
        value={form.discount}
        onChange={(e) => setForm({ ...form, discount: e.target.value })}
      />

      <input
        type="number"
        placeholder="Rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />

      <input
        type="number"
        placeholder="Discount %"
        value={form.discountPercentage}
        onChange={(e) =>
          setForm({ ...form, discountPercentage: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <button type="submit">{id ? "Update Product" : "Add Product"}</button>
    </form>
  );
};

export default Addproduct;

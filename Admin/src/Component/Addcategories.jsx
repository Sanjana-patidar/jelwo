import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminProduct.css";

const API = "https://jelwo.onrender.com/api/jewelry";

const Addcategories = () => {
    const [form, setForm] = useState({
    name: "",
    item: "",
    image: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const id = new URLSearchParams(location.search).get("id");

  // LOAD PRODUCT WHEN EDITING
  useEffect(() => {
    if (id) {
      axios.get(`${API}/${id}`).then((res) => {
        setForm({
          name: res.data.name,
          item: res.data.item,
          image: "null",
        });
      });
    }
  }, [id]);

  // ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("item", form.item);
    fd.append("image", form.image);
    
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

      navigate("/admin/admincategories");

    } catch (err) {
      console.error("Submit Error", err);
    }
  };

  return (
    <>
       <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />

        <button type="submit">
          {id ? "Update Category" : "Add Category"}
        </button>
      </form>
    </>
  )
}

export default Addcategories

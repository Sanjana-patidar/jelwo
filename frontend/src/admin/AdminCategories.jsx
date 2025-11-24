import React, { useEffect, useState } from 'react';
import './AdminCategories.css';
import axios from 'axios';

const API = "http://localhost:5000/api/jewelry";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", item: "", image: null });
  const [editId, setEditId] = useState(null);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(API);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ADD + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("item", form.item);
    if (form.image) {
      formData.append("image", form.image);   // file add
    }

    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${API}/add`, formData);
      }

      setForm({ name: "", item: "", image: null });
      setEditId(null);
      fetchCategories();
    } catch (err) {
      console.error("Submit Error", err);
    }
  };

  // EDIT
  const handleEdit = (cat) => {
    setForm({ name: cat.name, item: cat.item, image: null });
    setEditId(cat._id);
  };

  // DELETE
  const handleDelete = async (_id) => {
    await axios.delete(`${API}/${_id}`);
    fetchCategories();
  };

  return (
    <div className="admin-product-page">
      <h1 className="text-danger">🛒 Admin Categories Management</h1>

      {/* FORM */}
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
          {editId ? "Update Category" : "Add Category"}
        </button>
      </form>

      {/* LIST */}
      <div className="categories-container">
        <div className="header-top d-flex p-4 justify-content-around border border-secondary rounded-2 text-danger">
          <div>Image</div>
          <div>Category Name</div>
          <div>Quantity</div>
          <div>Delete</div>
          <div>Edit</div>
        </div>

        {categories.map((cat) => (
          <div className="categories-box" key={cat._id}>
            <div>
              <img
                className="w-100 border rounded-5 bg-white"
                src={`http://localhost:5000/uploads/${cat.image}`}
                alt={cat.name}
              />
            </div>
            <div>{cat.name}</div>
            <div>{cat.item}</div>
            <div>
              <button className="delete-btn" onClick={() => handleDelete(cat._id)}>
                Delete
              </button>
            </div>
            <div>
              <button className="edit-btn" onClick={() => handleEdit(cat)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;

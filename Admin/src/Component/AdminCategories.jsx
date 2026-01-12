import React, { useEffect, useState } from 'react';
import './AdminCategories.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API = `${import.meta.env.VITE_API_URL}/jewelry`;

const AdminCategories = () => {
  const [categorie, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // → Navigate to edit page
  const handleEdit = (p) => {
    navigate(`/admin/addcategorie?id=${p._id}`);
  };

  // Delete
  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchProducts();
  };



  return (
    <div className="admin-product-page">
      <div className='text-end' >
        <Link to="/admin/addcategorie">
        <button className='addbtn'>
          add category
        </button>
        </Link>
      </div>
      {/* LIST */}
      <div className="categories-container">
        <div className="header-top d-flex p-4 justify-content-around border border-secondary rounded-2 text-danger">
          <div>Image</div>
          <div>Category Name</div>
          <div>Quantity</div>
          <div>Delete</div>
          <div>Edit</div>
        </div>

        {categorie.map((cat) => (
          <div className="categories-box" key={cat._id}>
            <div>
              <img
                className="w-100 border rounded-5 bg-white"
                src={`https://jelwo.onrender.com/uploads/${cat.image}`}
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

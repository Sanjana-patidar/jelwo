import React, { useEffect } from 'react'
import { useState } from "react"
import "./Admin.css"
import axios from 'axios';
import {
  BarChart,Cell, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
const Dashboard = () => {
  // state for storing data of products count, categories count, users count from backend
  const [counts, setCounts] = useState({
    products:0, 
    categories:0,
    users:0
   });
// fetch count from backend api and set to state
   useEffect(()=>{
    const fetchCounts = async () => {
      try {
         const productscount = await axios.get("https://jelwo.onrender.com/api/products");
         const categoriescount = await axios.get("https://jelwo.onrender.com/api/jewelry");
         const userscount = await axios.get("https://jelwo.onrender.com/api/users");
         setCounts({
          products: productscount.data.length,
          categories: categoriescount.data.length,
          users: userscount.data.length,
         });
      }
      catch (error){
        console.error("Error fetching counts:", error);
      }
    }
    fetchCounts();
   }, [])

  // prepare data for recharts bar chart
   const data = [
  { name: "Products", value: counts.products, color: "#8884d8" },
  { name: "Categories", value: counts.categories, color: "#82ca9d" },
  { name: "users", value: counts.users, color: "#ffc658" },

];
  return (
    <>
    <div className="countcontainer">
      <div className='counts'>
         <div className='countbox1 '>
          <div><i class="fa-brands fa-product-hunt"></i></div>
          <div>products</div>
          <div className='number'>{counts.products}</div>
          </div>
         <div className='countbox2 '>
          <div><i class="fa-duotone fa-solid fa-layer-group"></i></div>
          <div>categories</div>
          <div className='number'>{counts.categories}</div>
          </div>
         <div className='countbox3 '>
          <div><i class="fa-solid fa-user"></i></div>
          <div>Users</div>
         <div className='number'> {counts.users}</div>
          </div>
      </div>
    </div>
    <div style={{ width: "100%", height: 600 }} >
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {data.map((item) => (
      <Cell key={item} fill={item.color} />
    ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default Dashboard

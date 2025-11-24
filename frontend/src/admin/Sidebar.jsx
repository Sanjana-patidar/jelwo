import React from 'react';
import { NavLink} from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './Admin.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin</h2>
      <ul className="sidebar-menu">
        <li ><NavLink to="/admin"  className={( { isActive }) =>
              isActive ? "active-link " : ""
            } > <GridViewIcon className='icon'/> Dashboard</NavLink></li>
        <li><NavLink to="/admin/adminproducts"  className={({ isActive }) =>
              isActive ? "active-link " : "text-decoration-none"
            } ><InventoryIcon className='icon'/>   Products</NavLink></li>
        <li><NavLink to="/admin/admincategories"  className={({ isActive }) =>
              isActive ? "active-link " : "text-decoration-none"
            }> <CategoryIcon className='icon'/> Categories</NavLink></li>
        <li><NavLink to="/admin/adminusers"  className={  ({ isActive }) =>
              isActive ? "active-link " : "text-decoration-none"
            }> <GroupAddIcon className='icon'/> Users</NavLink></li>
        <li><NavLink to="/home"  className={({ isActive }) =>
              isActive ? "active-link " : "text-decoration-none"
            }> <HomeIcon className='icon'/>User side</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar

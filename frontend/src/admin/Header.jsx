import React from 'react'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import GridViewIcon from '@mui/icons-material/GridView';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Link } from 'react-router-dom';
import './Admin.css'
const header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Offcanvas show={show} onHide={handleClose} placement='start' className="admin-offcanvas">
        <Offcanvas.Body>
         <div className='text-end '>
           <button className='text-end d-inline' onClick={handleClose}><CloseIcon/></button>
         </div>
         <div className='sidebar1' >
          <h2>Admin</h2>
          <ul className='sidebar-menu'>
            <li onClick={handleClose}><Link to="/admin" className='text-white'><GridViewIcon className='fs-4 pe-1'/> Dashboard</Link></li>
            <li onClick={handleClose}><Link to="/admin/adminproducts"><InventoryIcon className='fs-4 pe-1'/> Products</Link></li>
            <li onClick={handleClose}><Link to="/admin/admincategories"><CategoryIcon className='fs-4 pe-1'/> Categories</Link></li>
            <li onClick={handleClose}><Link to="/admin/adminusers"><GroupAddIcon className='fs-4 pe-1'/> User</Link></li>
            <li onClick={handleClose}><Link to="/home"><HomeIcon className='fs-4 pe-1'/>User Side</Link></li>
          </ul>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    <div className='admin-header'>
       <div className='humber' onClick={handleShow}><MenuIcon/></div>
      <div><h4>Jelwo Admin</h4></div>
      <div><Link to="/home"><i class="fa-solid fa-house"></i></Link></div>
    </div>
    </>
  )
}

export default header

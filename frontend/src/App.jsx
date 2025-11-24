import Home from "./pages/Home";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "hover.css/css/hover-min.css";
import "./App.css";
import Layout from "./Layout";
import Privacy from "./pages/Privacy";
import ReadMore from "./pages/ReadMore";
import Blog from "./pages/Blog";
import Storelocation from "./pages/Storelocation";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Showmore from "./pages/Showmore";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Scroll from "./pages/Scroll";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq";
import Term from "./pages/Term";
import Buynow from "./pages/Buynow";
import Whishlist from "./pages/Whishlist";
import Splashscreen from "./Splashscreen";
import { WishlistProvider } from "./Context/WhishlistContext";
import { CartProvider } from "./Context/CartContext";
import { BuynowProvider } from "./Context/BuynowContext";
import Cartoffacnvas from "./Cartoffacnvas";
import Adminlayout from "./admin/Adminlayout";
import Dashboard from "./admin/Dashboard";
import Header from "./admin/Header";
import Sidebar from "./admin/Sidebar";
import AdminCategories from "./admin/AdminCategories";
import AdminProduct from "./admin/AdminProduct";
import User from "./admin/User";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  //for Aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {showSplash ? (
        <Splashscreen />
      ) : (
        <BrowserRouter>
          <WishlistProvider>
            <BuynowProvider>
              <CartProvider>
                <Cartoffacnvas />
                <Routes>
                  <Route index element={<Signup />} />
                  <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="readmore" element={<ReadMore />} />
                    <Route path="storelocation" element={<Storelocation />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="showmore" element={<Showmore />} />
                    <Route path="aboutus" element={<About />} />
                    <Route path="faqpage" element={<Faq />} />
                    <Route path="term" element={<Term />} />
                    <Route path="buynow" element={<Buynow />} />
                    <Route path="wishlist" element={<Whishlist />} />
                  </Route>
                  {/* admin routes */}
                  <Route path="/admin" element={<Adminlayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="sidebar" element={<Sidebar />} />
                    <Route path="header" element={<Header/>} />
                    <Route path="admincategories" element={<AdminCategories />} />
                    <Route path="adminproducts" element={<AdminProduct />} />
                    <Route path="adminusers" element={<User/>} />
                  </Route>
                </Routes>
              </CartProvider>
            </BuynowProvider>
          </WishlistProvider>
          <Scroll />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;

import Product from "../modal/Product.js";

// create a new product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      frontImg: req.files.frontImg ? req.files.frontImg[0].filename : null,
      backImg: req.files.backImg ? req.files.backImg[0].filename : null,
      price: req.body.price,
      discount: req.body.discount,
      rating: req.body.rating,
      discountPercentage: req.body.discountPercentage,
      title: req.body.title
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//get single product by id

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };

    if (req.files.frontImg) {
      updateData.frontImg = req.files.frontImg[0].filename;
    }
    if (req.files.backImg) {
      updateData.backImg = req.files.backImg[0].filename;
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

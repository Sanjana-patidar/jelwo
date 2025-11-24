import Jewelry from "../modal/jewelry.js";

//  Add single jewelry item
// export const createJewelry = async (req, res) => {
//   try {
//     const jewelry = new Jewelry(req.body);
//     const savedItem = await jewelry.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
export const createJewelry = async (req, res) => {
  try {
    const newItem = new Jewelry({
      ...req.body,
      image: req.file ? req.file.filename : null,
    });

    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add multiple jewelry items
export const createJewelryBulk = async (req, res) => {
  try {
    const items = await Jewelry.insertMany(req.body);
    res.status(201).json(items);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//  Get all jewelry items
export const getJewelries = async (req, res) => {
  try {
    const jewelries = await Jewelry.find();
    res.status(200).json(jewelries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Get single jewelry item by ID
export const getJewelryById = async (req, res) => {
  try {
    const jewelry = await Jewelry.findById(req.params.id);
    if (!jewelry) {
      return res.status(404).json({ message: "Jewelry item not found" });
    }
    res.json(jewelry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete jewelry item
export const deleteJewelry = async (req, res) => {
  try {
    const deleted = await Jewelry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Jewelry item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Update jewelry item
// export const updateJewelry = async (req, res) => {
//   try {
//     const updated = await Jewelry.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated) {
//       return res.status(404).json({ message: "Item not found" });
//     }
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
export const updateJewelry = async (req, res) => {
  try {
    const dataToUpdate = { ...req.body };

    if (req.file) {
      dataToUpdate.image = req.file.filename;
    }

    const updated = await Jewelry.findByIdAndUpdate(
      req.params.id,
      dataToUpdate,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

import multer from "multer";
import path from "path";

// 1. Storage settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext); // Example: 1732123-ring.jpg
  }
});

// 2. File filter (only images allowed)
function fileFilter(req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);   // allow any image file
  } else {
    cb(new Error("Only image files allowed!"), false);
  }
}


const upload = multer({ storage, fileFilter });

export default upload;

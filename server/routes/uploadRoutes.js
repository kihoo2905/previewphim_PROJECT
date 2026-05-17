const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Đảm bảo thư mục uploads tồn tại
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Tạo tên file duy nhất: TIMESTAMP-TENFILE
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage,
    limits: { fileSize: 100 * 1024 * 1024 } // Giới hạn 100MB cho video
});

// Route upload 1 file (dùng cho Poster/Banner)
router.post('/single', upload.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'Không có file nào được tải lên' });
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
});

// Route upload nhiều file (nếu cần cho Gallery)
router.post('/multiple', upload.array('files', 10), (req, res) => {
    const files = req.files.map(file => `/uploads/${file.filename}`);
    res.json({ urls: files });
});

module.exports = router;

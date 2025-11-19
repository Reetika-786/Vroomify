import multer from "multer";
import path from "path";
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads');
if(! fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, uploadDir)
    },

    filename : (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const base = path.basename(file.originalname, ext).replace(/\s+/g, '-'); //Replace spaces with "-" . This avoids broken URLs.
        cb(null, `${base}-${Date.now()}${ext}`) //Add timestamp
    } 
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')) cb(null, true); //This will be true for png, jpg, jpeg, webp, gif, etc.
    else cb(new Error('Only images file are allowed'), false);
};

export const uploads = multer({
    storage,
    limits: {fileSize: 5*1024*1024}, //prevents very large uploads (5MB max)
    fileFilter
});
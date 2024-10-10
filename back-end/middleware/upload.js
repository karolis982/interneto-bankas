import { mkdir, access } from "node:fs/promises";
import multer from "multer";

export const storage = multer.diskStorage({
  destination: async (req, file, next) => {
    const uploadsDir = "./uploads";
    try {
      await access(uploadsDir);
    } catch {
      await mkdir(uploadsDir);
    }
    next(null, uploadsDir);
  },
  filename: (req, file, next) => {
    let filename = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let originalName = file.originalname.split(".");
    const extension = originalName[originalName.length - 1];

    next(null, filename + "." + extension);
  },
});

export const upload = multer({
  storage,
  fileFilter: (req, file, next) => {
    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.mimetype))
      return next("Ivyko klaida", false);

    next(null, true);
  },
});

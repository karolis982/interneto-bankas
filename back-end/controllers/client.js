import { Router } from "express";
import Client from "../models/client.js";
import { upload } from "../middleware/upload.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

router.post(
  "/create-client",
  checkAuth,
  upload.single("idPhoto"),
  async (req, res) => {
    try {
      if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { firstName, secondName, iban, idNumber } = req.body;

      if (!firstName || !secondName || !iban || !idNumber || !req.file) {
        return res.status(400).json({
          message:
            "All fields (firstName, secondName, iban, idNumber, idPhoto) are required",
        });
      }

      const newClient = new Client({
        firstName,
        secondName,
        iban,
        idNumber,
        idPhoto: req.file.filename,
        user: req.session.user.id,
      });

      
      const savedClient = await newClient.save();

      res.status(201).json({
        data: savedClient,
        message: "Client successfully uploaded",
      });
    } catch (error) {
      console.error("Error creating client:", error);
      res
        .status(500)
        .json({ message: "Unable to reach server", error: error.message });
    }
  }
);

export default router;

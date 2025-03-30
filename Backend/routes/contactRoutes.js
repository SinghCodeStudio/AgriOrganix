const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const cors = require("cors");

// ✅ CORS enable karo sirf is route ke liye
router.use(cors({ origin: "http://localhost:3000", credentials: true }));

// POST API to save form data
router.post("/submit", async (req, res) => {
  try {
    const { name, phone, email, message, from } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const newContact = new Contact({ name, phone, email, message, from });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

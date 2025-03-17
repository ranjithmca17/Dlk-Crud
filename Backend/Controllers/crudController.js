// const Crud = require("");
const Crud=require("../Models/Crud");

// Create a new CRUD entry
const createCrud = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingCrud = await Crud.findOne({ email });
    if (existingCrud) {
      return res.status(400).json({ success: false, message: "Email is already in use." });
    }

    // Create and save the new entry
    const newCrud = new Crud({ name, email, password });
    await newCrud.save();
    res.status(201).json({ success: true, data: newCrud });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error: " + error.message });
  }
};

// Fetch all CRUD entries
const getAllCrud = async (req, res) => {
  try {
    const crudEntries = await Crud.find();
    if (!crudEntries.length) {
      return res.status(404).json({ success: false, message: "No data found." });
    }
    res.status(200).json({ success: true, data: crudEntries });
  } catch (error) {
    res.status(500).json({ success: false, message: "Cannot fetch data. Server error: " + error.message });
  }
};

const updateCrud = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Check if the new email already exists (excluding the current document)
    const existingCrud = await Crud.findOne({ email, _id: { $ne: id } });
    if (existingCrud) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use by another user.",
      });
    }

    // Find and update the entry
    const updatedCrud = await Crud.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true } // Return the updated document
    );

    if (!updatedCrud) {
      return res.status(404).json({ success: false, message: "Entry not found." });
    }

    res.status(200).json({ success: true, message: "Updated successfully.", data: updatedCrud });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error: " + error.message });
  }
};

// Delete a CRUD entry by ID
const deleteCrud = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCrud = await Crud.findByIdAndDelete(id);

    if (!deletedCrud) {
      return res.status(404).json({ success: false, message: "Entry not found to delete." });
    }

    res.status(200).json({ success: true, message: "Deleted successfully.", data: deletedCrud });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error: " + error.message });
  }
};

module.exports = { createCrud, getAllCrud, updateCrud, deleteCrud };
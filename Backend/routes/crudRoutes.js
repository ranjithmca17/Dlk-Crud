
const express = require("express");
const { createCrud, getAllCrud, updateCrud, deleteCrud } = require("../Controllers/crudController");

const router = express.Router();

// CRUD routes
router.post("/post", createCrud);
router.get("/get", getAllCrud);
router.put("/put/:id", updateCrud);
router.delete("/delete/:id", deleteCrud);

module.exports = router;
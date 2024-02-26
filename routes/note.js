const {
  handleGetAllNotes,
  handlePostNotes,
  handleGetOneNotes,
  handleDeleteNotes,
  handleupdateNotes,
} = require("../controller/note");
const express = require("express");
const router = express.Router();
router.get("/", handleGetAllNotes);
router.get("/", handleGetOneNotes);
router.post("/", handlePostNotes);
router.delete("/", handleDeleteNotes);
router.put("/", handleupdateNotes);

module.exports = router;

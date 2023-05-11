const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get("/", async (req, res) => {
    await controller.search(req, res)
});




module.exports = router;

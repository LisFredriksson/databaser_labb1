const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get("/", async (req, res) => {
    controller.get(req, res)
});

router.get("/details", async (req, res) => {
    controller.getDetails(req, res)
});

router.post("/create", async (req, res) => {
    controller.add(req, res);
    console.log(req.body)
});

module.exports = router;

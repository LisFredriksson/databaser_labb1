const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get("/", async (req, res) => {
    controller.get(req, res)
    console.log(req)
});

router.post("/", async (req, res) => {
    controller.add(req, res)
    console.log(req.body)
});

router.get("/create", async (req, res) => {
    controller.getCreate(req, res);
});

router.get("/:id", async (req, res) => {
    controller.getDetails(req, res)
});

module.exports = router;

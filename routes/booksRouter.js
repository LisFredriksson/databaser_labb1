const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get("/", async (req, res) => {
    controller.get(req, res)
    console.log(req)
});

router.post("/", async (req, res) => {
    controller.add(req, res)
});

router.get("/create", async (req, res) => {
    controller.getCreate(req, res);
});

router.post("/addauthor", async (req, res) => {
    controller.addAuthor(req, res);
});

router.post("/addgenre", async (req, res) => {
    controller.addNewGenre(req, res);
});

router.get("/:id", async (req, res) => {
    controller.getDetails(req, res)
});

module.exports = router;

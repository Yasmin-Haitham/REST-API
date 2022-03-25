const express = require("express");
const router = express.Router();

const todos = [];

// Listing TODOs
router.get("/", (req, res) => {
    res.render("home.pug", { todos });
});

// Adding TODO
router.get("/add", (req, res) => res.render("add.pug"));
router.post("/add", (req, res) => {
    todos.push(req.body);
    res.redirect("/todo");
});

// Editing TODO
router.get("/edit/:id", (req, res) =>
    res.render("edit.pug", { todo: todos[req.params.id], id: req.params.id })
);
router.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    todos[id] = req.body;
    res.redirect("/todo");
});

// Deleting TODO
router.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    todos.splice(id, 1);
    res.redirect("/todo");
});

module.exports = router;

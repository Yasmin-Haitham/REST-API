const express = require("express");
const mongoose = require ("mongoose")
const todoRouter = require("./routes/todo");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

mongoose.connect(
    "mongodb+srv://admin:Pass@word01@cluster0.dze5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {},
    ()=>{console.log("connected to database")}
)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(3000, () => console.log("Server is up and running"));

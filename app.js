const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware
app.use(express.static("/public"));

app.get("/", (req, res) => {
    res.send("This is homepage.")
});

app.listen(3000, () => {
    console.log("Sever is running on port 3000.")
})
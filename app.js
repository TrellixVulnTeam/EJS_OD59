const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

//這邊用 :name 去做 params，『:name』可代表任何字符
app.get("/:name", (req, res) => {
		let {name} = req.params;
		res.render("person.ejs", {Name: name});
		//res.render 後方除了 basename 外，還可以放一個 optional 的物件
		//第二個參數前面的 Name 等同 .ejs 檔案裡的 =Name；後面的 name 則是 :name
		//亦可把上面兩行濃縮：res.render("person.ejs", {Name: req.params.name});
});

app.listen(3000, () => {
    console.log("Sever is running on port 3000.")
});
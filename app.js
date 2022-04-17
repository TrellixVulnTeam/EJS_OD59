const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

/*
下方的『/response』呼應了index.ejs中 form action 的傳送地點 /response；
代表使用者一進入首頁先看到 index.ejs 的表格，送出後，網址跳轉為『/response』就
進入下方所寫的代碼描述
*/
app.get("/response", (req, res) => {
	let { fullname, age } = req.query;
	//console.log(request.query);    
	//上方可以看到使用者所輸入的資料，如{fullname: Daniel  age:18}
	res.render("respond.ejs", {fullname, age});
	//上方將『respond.ejs』的內容呈現在『/response』中，
	//也讓{fullname, age}可在『respond.ejs』中使用
});

app.listen(3000, () => {
    console.log("Sever is running on port 3000.")
});
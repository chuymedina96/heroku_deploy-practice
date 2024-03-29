var express 	= require("express"),
	app			= express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("index");
});
app.get("/home", function(req, res){
	res.render("home");
});
app.listen(process.env.PORT || 3000);
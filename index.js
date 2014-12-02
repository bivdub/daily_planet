var express = require('express');
var bodyParser = require('body-parser');
app = express();
var articles = [{headline: 'Breaking News!', textBody: 'Hey!'}];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/articles', function(req, res) {
	res.render("article", {articles: articles});
});

app.get('/articles/new', function(req, res) {
	res.render("new");
});

app.post('/articles', function(req, res) {
	articles.push(req.body);
	res.render("article", {articles: articles});
});

app.get('/articles/:id', function(req, res) {
	var article = articles[req.params.id]
	res.render("show", article)
})

app.listen(3000);
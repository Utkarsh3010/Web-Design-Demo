const express =  require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));


app.get("/",function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get("/search",function(req,res){
  res.render("searchpage");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000!");
})

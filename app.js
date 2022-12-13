const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = [];
app.set('view engine' , 'ejs')
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}))



app.get("/", (req, res)=>{
    var today = new Date();
   var options = {
       weekday:"long",
       day:"numeric",
       month:"long"
   };

   var day = today.toLocaleDateString('en-US', options)
   
    res.render("index",{listTitle:day, listItem:items})
})

app.post("/", (req, res)=>{
   
   var item = req.body.newItem
    items.push(item)
    res.redirect("/")
})




app.listen(3000, ()=>{
    console.log("Server is up at 3000");
})
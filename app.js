const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date");
const app=express();

let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get('/',(req,res)=>{

let day=date.getDate();
   res.render("list",{listTitle: day,newListItems:items})

});

app.post('/',(req,res)=>{
let item=req.body.newItem
if(req.body.list === "Worklist") 
{
  workItems.push(item)
  res.redirect("/work")
}
else{
 items.push(item);
  res.redirect("/")
}
})

app.get("/work",(req,res)=>{
  res.render("list",{listTitle: "Worklist",newListItems:workItems})
})

app.get("/about",(req,res)=>{
  res.render("about",{listTitle: "Worklist",newListItems:workItems})
})
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})
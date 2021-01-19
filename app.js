const express=require("express");
const path=require("path");
const app=express();
const port=80;

app.use('/css', express.static('css'))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})
const express = require("express");

const app = express();
const port =3005;
app.get("/", (req,res)=>{
    res.send("welcome to express server")

});
app.get("/products", (req,res)=>{
    res.send({
        products : [
            {id: 1, title: "iphone 15", price: 480},
            {id: 2, title: "iphone 16", price: 500},
            {id: 3, title: "iphone 17", price: 600},
            {id: 4, title: "iphone 18", price: 700},
        ]
    })

});
app.listen(port,() => {
    console.log(`server is running at ${port}`);
});
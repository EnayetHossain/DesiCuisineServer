const express = require("express");
const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res)=>{
    res.send("home path running");
});

app.get("/chefs", (req, res)=>{
    res.send(chefs);
});

app.get("/chefs/:chefId", (req, res)=>{
    const id = req.params.chefId;
    const chefRecipes = recipes.filter(c => c.cookId === id);
    const chef = chefs.find(c => c.chefId === id)
    // res.send(chefRecipes);
    // res.send(chef);

    res.write(JSON.stringify({
        chef,
        chefRecipes
    }));
    res.end();
    // res.write(chef)
});

// app.get("/chefs/:id", (req, res)=>{
//     const id = req.params.id;
//     console.log(id);
// });

app.listen(port, ()=>{
    console.log(`visit port: ${port}`);
});

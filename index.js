const express = require("express");

const port = 8080;
const app = express();

const pizzas = [
    {
        id:1,
        name: "hawaiian",
        size: "12inch",
        spicy: true
    },
    {
        id:2,
        name: "meateor",
        size: "48 inch",
        spicy: false
    }
];

app.get("/pizzas", (req, resp) => {
    console.log("Returning Pizzas");
    resp.setHeader("Content-Type", "application/json");
    resp.send(pizzas);
});

console.log(`Server listening on ${port}`);
app.listen(port);
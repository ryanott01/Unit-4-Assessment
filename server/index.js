const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    addHatedItem,
    addLovedItem,
    deleteHatedItem,
    deleteLovedItem
 } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/hated", addHatedItem);
app.delete("/api/hated/:index", deleteHatedItem);
app.post("/api/loved", addLovedItem);
app.delete("/api/loved/:index", deleteLovedItem);

app.listen(4000, () => console.log("Server running on 4000"));

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT|| 3000;
const CategoryRoute = require("./routes/category");
const RestaurantRoute = require("./routes/restaurant");

const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => console.log("foodly connected to database")).catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/category",CategoryRoute);
app.use("/api/restaurant",RestaurantRoute);


app.listen(process.env.PORT || 6013, () => console.log(`Foodly backend is running on ${process.env.PORT}`)) 
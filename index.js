const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// User Route ;
const userRoute = require("./Routes/user");

app.use("/api/test/user", userRoute);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Successfully Connected to MongoDB !"))
    .catch((err) => console.log(err));

app.listen(
    8080,
    () => { console.log("Server Running @ Port 5000 !") }
);
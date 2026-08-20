const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("AI Skills Assessment Platform - Application is Running!");
});

app.get("/health", (req, res) => {
    res.send("Application is healthy");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});

const express = require("express");
const app =  express();
const cors = require("cors")

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/User");
app.use("/user", userRoute);

const userRouteUp = require("./routes/Upload");
app.use("/user", userRouteUp);


app.listen(3001, (req, res) => {
    console.log("Its Running...");
})
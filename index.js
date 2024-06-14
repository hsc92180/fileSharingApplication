const express = require("express");

const nodemon = require("nodemon");
const routes=require("./routes/files")

const app = express();

app.use(routes);

app.listen(8070, () => {
    console.log("server is up and running on port 8070");
})
const express = require("express");
const app = express();
const cors = require('cors')
const auth = require('./routes/auth');
const connection = require('./db');

require("dotenv").config();

const port = process.env.PORT || 8080;

connection();

app.use(express.json());
app.use(cors())

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/auth", auth);

app.listen(port, async () => {
    console.log(`Listening on port ${port}...`)
});
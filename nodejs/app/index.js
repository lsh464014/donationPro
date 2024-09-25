const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
app.use(cors())

const allRouter = require("../router/all");
app.use("/api", allRouter);


app.listen(port, () => console.log(`http://127.0.0.1`))
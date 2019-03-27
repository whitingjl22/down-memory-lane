const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(express.static("./../react-app/build/"))

app.listen(1337)

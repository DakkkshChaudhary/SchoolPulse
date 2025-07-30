const express = require("express")
const path = require("path")
const hbs = require("hbs")
require("dotenv").config()

const Router = require("./routes/index")
require("./helpers/index")
// require("./db_connect")
require("./db_connect")

const app = express()
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname,"views/public")))        // used for css, images in public folder
app.use("/public", express.static("public"))        // used for server side images 
hbs.registerPartials(path.join(__dirname,"views/partials"))

app.use("",Router)

let port = process.env.PORT || 8000
app.listen(port,console.log(`Server is running at http://localhost:${port}`))


const express = require("express")
const path = require("path")
const hbs = require("hbs")

const Router = require("./routes/index")

const app = express()
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname,"views/public")))
hbs.registerPartials(path.join(__dirname,"views/partials"))

app.use("",Router)

let port = process.env.PORT || 8000
app.listen(port,console.log(`Server is running at http://localhost:${port}`))


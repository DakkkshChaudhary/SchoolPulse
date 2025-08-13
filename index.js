// const express = require("express")
// const path = require("path")
// const hbs = require("hbs")
// require("dotenv").config()

// const Router = require("./routes/index")
// require("./helpers/index")
// // require("./db_connect")
// require("./db_connect")

// const app = express()
// app.set("view engine", "hbs")
// app.use(express.static(path.join(__dirname,"views/public")))        // used for css, images in public folder
// app.use("/public", express.static("public"))        // used for server side images 
// hbs.registerPartials(path.join(__dirname,"views/partials"))

// app.use("",Router)

// let port = process.env.PORT || 8000
// app.listen(port,console.log(`Server is running at http://localhost:${port}`))



const express = require("express")
const path = require("path")
const hbs = require("hbs")
const session = require('express-session')

require("dotenv").config()

const app = express()
var sessionObj = {
    secret: process.env.SESSION_SECRET_KEY,
    resave: true,            // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    cookie: {}
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1)       // trust first proxy
    sessionObj.cookie.secure = true // serve secure cookies
}
app.use(session(sessionObj))

const Router = require("./routes/index")
require("./helpers/index")
require("./db_connect")

app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "views/public")))   //used for css,images in public folder etc
app.use("/public", express.static("public"))                    //used to sever uploaded files
hbs.registerPartials(path.join(__dirname, "views/partials")
)

app.use("", Router)

let port = process.env.PORT || 8000
app.listen(port, console.log(`Server is Running at http://localhost:${port}`))



const hbs = require("hbs")

hbs.registerHelper("siteName", ()=>{
    return process.env.SITE_NAME
})
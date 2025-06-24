const frontRouter = require ("express").Router()

const {
    homePage
}= require("../controllers/front")

frontRouter.get("", homePage)

module.exports = frontRouter
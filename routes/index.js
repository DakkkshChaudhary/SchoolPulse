const Router = require ("express").Router()

const frontRouter = require ("./front")

Router.use("",frontRouter)
module.exports = Router
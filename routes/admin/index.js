const AdminRouter = require("express").Router()

const {
    homePage,
} = require("../../controllers/admin/adminHome")
const EventsRouter = require("./events")

AdminRouter.get("", homePage)
AdminRouter.use("/events", EventsRouter)

module.exports = AdminRouter
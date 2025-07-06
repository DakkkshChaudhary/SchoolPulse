const EventsRouter = require("express").Router();

const {
    homePage,
    createPage,
    storePage,
} = require("../../controllers/admin/adminEvents")

EventsRouter.get("", homePage)
EventsRouter.get("/create", createPage)
EventsRouter.post("/store", storePage)

module.exports = EventsRouter;
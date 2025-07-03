const EventsRouter = require("express").Router();

const {
    homePage,
} = require("../../controllers/admin/adminEvents")

EventsRouter.get("", homePage)

module.exports = EventsRouter;
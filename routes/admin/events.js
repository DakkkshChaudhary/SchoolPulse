const EventsRouter = require("express").Router();
const encoder = require("../../middlewares/bodyParser");
const {eventUploader} = require("../../middlewares/fileUploader");

const {
    homePage,
    createPage,
    storePage,
} = require("../../controllers/admin/adminEvents")

EventsRouter.get("", homePage)
EventsRouter.get("/create", createPage)
EventsRouter.post("/store",eventUploader.single("pic"),encoder, storePage)

module.exports = EventsRouter;
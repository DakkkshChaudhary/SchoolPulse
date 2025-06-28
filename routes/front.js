const frontRouter = require ("express").Router()

const {
    homePage,
    aboutPage,
    featurePage,
    departmentPage,
    teamPage,
}= require("../controllers/front")

frontRouter.get("", homePage)
frontRouter.get("/about", aboutPage)
frontRouter.get("/feature", featurePage)
frontRouter.get("/department", departmentPage)
frontRouter.get("/team", teamPage)
frontRouter.get("/testimonial", testimonialPage)

module.exports = frontRouter
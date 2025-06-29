const frontRouter = require("express").Router()

const {
    homePage,
    aboutPage,
    featurePage,
    departmentPage,
    teamPage,
    testimonialPage,
    contactUsPage,
    enquiryPage,
    galleryPage,
    faqPage,
    eventsPage,

} = require("../controllers/front")

frontRouter.get("", homePage)
frontRouter.get("/about", aboutPage)
frontRouter.get("/feature", featurePage)
frontRouter.get("/department", departmentPage)
frontRouter.get("/team", teamPage)
frontRouter.get("/testimonial", testimonialPage)
frontRouter.get("/contactus", contactUsPage)
frontRouter.get("/enquiry", enquiryPage)
frontRouter.get("/gallery", galleryPage)
frontRouter.get("/faq", faqPage)
frontRouter.get("/events", eventsPage)

module.exports = frontRouter
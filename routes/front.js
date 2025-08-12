// const frontRouter = require("express").Router()

// const {
//     homePage,
//     aboutPage,
//     featurePage,
//     departmentPage,
//     teamPage,
//     testimonialPage,
//     contactUsPage,
//     enquiryPage,
//     galleryPage,
//     faqPage,
//     eventsPage,
//     servicePage,

// } = require("../controllers/front")

// frontRouter.get("", homePage)
// frontRouter.get("/about", aboutPage)
// frontRouter.get("/feature", featurePage)
// frontRouter.get("/department", departmentPage)
// frontRouter.get("/team", teamPage)
// frontRouter.get("/testimonial", testimonialPage)
// frontRouter.get("/contactus", contactUsPage)
// frontRouter.get("/enquiry", enquiryPage)
// frontRouter.get("/gallery", galleryPage)
// frontRouter.get("/faq", faqPage)
// frontRouter.get("/events", eventsPage)
// frontRouter.get("/service", servicePage)

// module.exports = frontRouter




const frontRouter = require("express").Router()
const encoder = require("../middlewares/bodyParser")
const {
    homePage,
    aboutPage,
    featurePage,
    departmentPage,
    teamPage,
    testimonialPage,
    contactUsPage,
    contactUsStorePage,
    enquiryPage,
    enquiryStorePage,
    galleryPage,
    faqPage,
    eventPage,
    newsletterSubscription
} = require("../controllers/front")

frontRouter.get("", homePage)
frontRouter.get("/about", aboutPage)
frontRouter.get("/feature", featurePage)
frontRouter.get("/department", departmentPage)
frontRouter.get("/team", teamPage)
frontRouter.get("/testimonial", testimonialPage)
frontRouter.get("/contactus", contactUsPage)
frontRouter.post("/contactus", encoder, contactUsStorePage)
frontRouter.get("/enquiry", enquiryPage)
frontRouter.post("/enquiry", encoder, enquiryStorePage)
frontRouter.get("/gallery", galleryPage)
frontRouter.get("/faq", faqPage)
frontRouter.get("/event", eventPage)
frontRouter.post("/newsletter", encoder, newsletterSubscription)

module.exports = frontRouter
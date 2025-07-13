function homePage(req,res){
    res.render("index",{
        // title: "Home",
        currentUrl: "/"
    })
}
function aboutPage(req,res){
    res.render("aboutPage",{title:"About us", currentUrl: "/about"})
}

function featurePage(req,res){
    res.render("featurePage",{title:"Features", currentUrl: "/feature"})
}

function departmentPage(req,res){
    res.render("departmentPage",{title:"Department", currentUrl: "/department"}) 
}

function teamPage(req,res){
    res.render("teamPage",{title:"Team", currentUrl: "/team"}) 
}

function testimonialPage(req,res){
    res.render("testimonialPage",{title:"Testimonial", currentUrl: "/testimonial"}) 
}

function contactUsPage(req,res){
    res.render("contactUsPage",{title:"ContactUs", currentUrl: "/contactUs"}) 
}

function enquiryPage(req,res){
    res.render("enquiryPage",{title:"Enquiry for Admission", currentUrl: "/enquiry"}) 
}

function galleryPage(req,res){
    res.render("galleryPage",{title:"Gallery", currentUrl: "/gallery"}) 
}

function faqPage(req,res){
    res.render("faqPage",{title:"FAQ", currentUrl: "/faq"}) 
}

function eventsPage(req,res){
    res.render("eventsPage",{title:"Events", currentUrl: "/events"}) 
}

function servicePage(req,res){
    res.render("servicePage",{title:"Services", currentUrl: "/service"}) 
}


module.exports = {
    homePage: homePage,
    aboutPage: aboutPage,
    featurePage: featurePage,
    departmentPage: departmentPage,
    teamPage: teamPage,
    testimonialPage: testimonialPage,
    contactUsPage: contactUsPage,
    enquiryPage: enquiryPage,
    galleryPage: galleryPage,
    faqPage: faqPage,
    eventsPage: eventsPage,
    servicePage: servicePage
}
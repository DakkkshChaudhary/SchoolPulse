function homePage(req,res){
    res.render("index",{
        // title: "Home"
    })
}
function aboutPage(req,res){
    res.render("aboutPage",{title:"About us"})
}

function featurePage(req,res){
    res.render("featurePage",{title:"Features"})
}

function departmentPage(req,res){
    res.render("departmentPage",{title:"Department"}) 
}

function teamPage(req,res){
    res.render("teamPage",{title:"Team"}) 
}

function testimonialPage(req,res){
    res.render("testimonialPage",{title:"Testimonial"}) 
}

function contactUsPage(req,res){
    res.render("contactUsPage",{title:"ContactUs"}) 
}

function enquiryPage(req,res){
    res.render("enquiryPage",{title:"Enquiry for Admission"}) 
}

function galleryPage(req,res){
    res.render("galleryPage",{title:"Gallery"}) 
}

function faqPage(req,res){
    res.render("faqPage",{title:"FAQ"}) 
}

function eventsPage(req,res){
    res.render("eventsPage",{title:"Events"}) 
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
}
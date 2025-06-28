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

module.exports = {
    homePage: homePage,
    aboutPage: aboutPage,
    featurePage: featurePage,
    departmentPage: departmentPage,
    teamPage: teamPage,
    testimonialPage: testimonialPage,
    
}
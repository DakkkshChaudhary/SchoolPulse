function homePage(req,res){
    res.render("admin/events/index",{
        title : "Admin - Events"
    })
}

function createPage(req,res){
    res.render("admin/events/create",{
        title : "Admin - Create Event",
        errorMessage: {},
    })
}

function storePage(req,res){
    res.render("admin/events/create",{
        title : "Admin - Create Event",
        errorMessage: {
            title: "Title is required",
            shortDescription: "Short description is required",
            longDescription: "Long description is required",
            pic: "Picture is required",
            date: "Date is required",
        }
    })
}


module.exports = {
    homePage: homePage,
    createPage: createPage,
    storePage: storePage
}
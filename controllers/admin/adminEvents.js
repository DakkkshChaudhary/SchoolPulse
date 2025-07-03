function homePage(req,res){
    res.render("admin/events/index",{
        title : "Admin - Events"
    })
}

module.exports = {
    homePage: homePage,
}
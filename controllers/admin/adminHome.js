function homePage(req,res){
    res.render("admin/index",{
        title : "Admin Home"
    })
}

module.exports = {
    homePage: homePage,
}
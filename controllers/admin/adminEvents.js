const Event = require("../../models/Event");
async function homePage(req, res) {
  try {
    let data = await Event.find().sort({_id: -1})
    res.render("admin/events/index",{
      title: "Admin - Events",
      data: data
    })
  } catch (error) {
    
  }
}

function createPage(req, res) {
  res.render("admin/events/create", {
    title: "Admin - Create Event",
    errorMessage: {},
    data: {}
  });
}

async function storePage(req, res) {

    try {
    var data = new Event(req.body);
    if (req.file) {
      data.pic = req.file.path;
    }
    data.createBy = "Admin"; // Assuming the creator is always "Admin"
    await data.save();
    res.redirect("/admin/event");
  } catch (error) {
    console.log(error);
    let errorMessage = {};

    error.errors?.title ? errorMessage.title = error.errors.title.message : "";
    error.errors?.shortDescription ? errorMessage.shortDescription = error.errors.shortDescription.message : "";
    error.errors?.longDescription ? errorMessage.longDescription = error.errors.longDescription.message : "";
    error.errors?.pic ? errorMessage.pic = error.errors.pic.message : "";
    error.errors?.date ? errorMessage.date = error.errors.date.message : "";

    res.render("admin/events/create", {
      title: "Admin - Create Event",
      errorMessage: errorMessage,
      data: data
    });
  }

  
}

module.exports = {
  homePage: homePage,
  createPage: createPage,
  storePage: storePage,
};

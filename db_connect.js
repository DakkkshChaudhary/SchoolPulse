require("mongoose").connect("mongodb://localhost:27017/SchoolPulse",{
     useNewUrlParser: true,
  useUnifiedTopology: true
})
// require("mongoose").connect("mongodb://127.0.0.1:27017/SchoolPulse")

.then(()=>{
    console.log("Database is connected")
})
.catch(error=>{
    console.log(error)
})
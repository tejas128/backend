const express= require("express")
const helmet=require("helmet")
const dotenv =require("dotenv")
const userrouter=require("./api/users/routes")
const storyrouter=require("./api/pages/story/routers")
const learnrouter=require("./api/pages/learn/routers")
const contactUsRouter=require("./api/contactus/routes")
const newsletter=require("./api/newsletter/routes")
const latestrouter=require("./api/latestcard/routes")
const iporouter=require("./api/ipo/routes")
const bodyParser = require("body-parser")
const cors=require('cors')
const validityrouter=require("./api/token/validity")
const marquerouter=require("./api/marque/routes")

dotenv.config()
var corsOptions={
    origin:['http://localhost:3000',"http://dev.nishkaera.com"],
    optionsSuccessStatus: 200 
}

const app=express()
app.use(helmet())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use('/uploads', express.static('uploads'));

//api routes
app.use("/api",userrouter)  // login and register route
app.use("/api/story",storyrouter) //story route
app.use("/api/learn",learnrouter)  //learning card route
app.use("/api/contactus",contactUsRouter)//contactus 
app.use("/api/newsletter",newsletter)
app.use("/api/latest",latestrouter)
app.use("/api/ipo",iporouter)
app.use("/api/token",validityrouter)
app.use("/api/marque",marquerouter)
try{
    app.listen(process.env.APP_PORT,()=>{
        console.log(`server started on ${process.env.APP_PORT}.visit http://localhost:${process.env.APP_PORT}`)
    })
}catch(err){
    console.log("error while creating server")

}

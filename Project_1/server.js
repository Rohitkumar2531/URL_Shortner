import express from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from "./Controllers/urls.js";

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://kumarrohit33551:kcv8w6xdhNVQUQ3U@cluster0.gzthqdq.mongodb.net/",{
  dbName:"Nodejs"
}).then(()=>console.log("MongoDb connected ..!")).catch((error)=>console.log(error))


  // rendering the ejs file
  app.get('/',(req,res)=>{
    res.render("index.ejs", {shortUrl :null})
  })

  // shorting url logic
  app.post('/short',shortUrl)

  // redirect to original url using short code :- dynamic routing
  app.get("/:shortCode", getOriginalUrl);

const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))
const cluster = require('node:cluster');
const path = require('path')
const operatingSystem = require('os')
const cpus = operatingSystem.cpus().length
const express = require('express')
const cookieParser = require('cookie-parser')
const body = require('body-parser')
const cors = require('cors')
const connection = require('./conn/db')
const dotenv = require('dotenv')
const ErrorHandler = require('./middelwares/error')
dotenv.config({path:'.env'});
const { createDocs } = require('./utils/swagger');

const app = express();
// app.use(cors({credentials:true, origin:"http://localhost:3000",  methods: "GET,POST,PUT,DELETE"}))
app.use(cookieParser())
app.use(express.json())
app.use(body.urlencoded({extended:false}))

const buidPath = path.join(__dirname,"../client/build")
app.use(express.static(buidPath))

app.use(cors({  exposedHeaders: 'Set-Cookie',Headers: true,credentials:true, origin:"*",  methods: "GET,POST,PUT,DELETE", optionsSuccessStatus: 200,allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Authorization'
  ]}))


  
  
  connection();

app.use("/upload", express.static("./upload"))
if(cluster.isPrimary){
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
}else{
  

  


const User = require('./routes/Userroute');
const Posts = require('./routes/Postroute');
const Comment = require('./routes/Commentroute');
app.use('/memories/comment',Comment)
app.use('/memories/user',User)
app.use('/memories/post',Posts)

app.use(ErrorHandler)

app.listen(process.env.PORT,() => {
  console.log(`Your Server Running on ${process.env.PORT}`);
  createDocs(app )
})
}


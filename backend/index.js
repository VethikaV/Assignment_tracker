const express = require("express");
const mdb = require("mongoose");
const dotenv = require('dotenv');
const cors= require('cors');
const signup=require('./models/SignupSchema.js')
const bcrypt = require('bcrypt')

const app = express();
app.use(cors())
app.use(express.json())
const PORT = 3002;
dotenv.config()


mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection Successful");// if it doesnot work connect with local server
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});


app.get("/static", (req, res) => {
  res.sendFile("D:\MERN_2025\Day-4\Task\index.html");
});

app.post("/signups",async (req,res) =>{
    try{

    const {firstName,lastName,email,password,phoneNumber}=req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const newSignup= new signup({

        firstName: firstName,
        lastName:lastName,
        email:email,
        password:hashedPassword,
        phoneNumber:phoneNumber,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignUp: true });
  }  catch (error) {
    console.log(error);
        res.status(400).json({ message: "Signup Unsuccessfully", isSignUp: false});
    }
});

//check the existing user list
//getssignupdet dhan name to be pasted in pist
app.get('/getsignupdet',(req,res)=>{
  const signup =Signup.find()
  console.log(signup);
  res.send("Signup details fetched")
})
   
app.post("/login" , async(req,res) => {
  try{
      const{email,password} = req.body
      const existingUser = await signup.findOne({email:email})
      console.log(existingUser)
      if(existingUser){
        const isValidPassword = await bcrypt.compare(password,existingUser.password);
        console.log(isValidPassword);
        if(isValidPassword){
          res.status(201).json({message:"Login Succesful",isLoggedIn:true });
        }
        else{
          res.status(201).json({message:"Incorrect Password",isLoggedIn:false });

        } 
      }
      else{
        res.status(201).json({message:"User not found, Signup first",isLoggedIn:false });
      }
      res.json("Login fetched")
  } 
  catch(error){
      console.log("Login error");
      res.status(400).json({message:"Login Error Check Your Code",isLoggedIn:false });
  }
})

app.listen(PORT, () => {
    console.log("Server Started Successfully")
});
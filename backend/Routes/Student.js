const express = require('express');
const Router=express.Router();
const{getStudentlogin,getStudentSignup,EditStudent,displayStudent,deletestudent}=require('../Controller/Student_controller');



Router
.get('/Login',(req,res)=>{console.log("called login get again") ;return res.send("<h1> called login</h1>")})
.post('/Login',getStudentlogin)
.put('/EditStudent',EditStudent)
.post('/Singup',getStudentSignup)
.get('/display',displayStudent)
.post('/delete',deletestudent)

module.exports= Router;

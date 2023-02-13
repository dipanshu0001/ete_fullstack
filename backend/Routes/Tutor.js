const express = require('express');
const Router=express.Router();
const {getTutorLogin,getTutorSignup,DisplayTutor,EditTutor,getAdmin,deletetutor}=require('../Controller/Tutor_controller');




Router
// .get('/Login',(req,res)=>{console.log("called login get again") ;return res.send("<h1> called login</h1>")})
.post('/Login',getTutorLogin)
.put('/EditTutor',EditTutor)
// .get('/tutorpofile',getstudentProfile)
.post('/Singup',getTutorSignup)
.get('/display',DisplayTutor)
.post('/Admin',getAdmin)
.delete('/delete',deletetutor)
module.exports= Router;
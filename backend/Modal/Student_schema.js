// const { stringify } = require("querystring");

const mongoose = require('mongoose');

const Student_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,


    },
    email:{
        type:String,
    
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        // required:true,
    },
    subjects:{
        type:String,
        // type:[String]   future mai array of string leni hai user se input mai save kerene ke liye

        // requried:true
    },
    password:{
        type:String,
        required:true
    },
    // recent_study_time: Date,
    // studied_with: [{ future mai add kerna ki studen konse konse teacher se padh chuka
    //   tutor_name: {
    //     type: String,
    //     // required: true
    //   },
    //   study_time: {
    //     type: Date,
    //     // required: true
    //   }
    // }],
    // student:Boolean,
    city:{
        type:String,
        // required:true
    },
    pincode:{
        type:Number,
        // required:true
    },
    class:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    }
})
const StudentModel=mongoose.model('Student_model',Student_schema);
module.exports=StudentModel;
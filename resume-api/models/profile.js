import mongoose from "mongoose";

const studentschema= new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    email:{type:String, required:true,trim:true},
    dob:{type:Date},
    state:{type:String},
    gender:{type:String},
    location:{type:String},
    pimage:{type:String},
    rdoc:{type:String,required:true},
    
}) 

const stumodel=mongoose.model("student",studentschema)

export default stumodel
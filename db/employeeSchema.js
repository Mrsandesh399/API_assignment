const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    password:{type:String,rewuired:true}
});

module.exports = mongoose.model("empdata",employeeSchema)
const employeeModel = require("../db/employeeSchema");

async function postData(data){
    let ins = await new employeeModel(data);
    ins.save((err)=>{
        if (err) throw err;
    })
}

function getData(){
    // employeeModel.find({},(err,data)=>{
    //     if(err) throw err;
    //     return data;
    // }).clone()
    return (employeeModel.find({}))
}

async function updateData(id,data){
   await employeeModel.updateOne({_id:id},{$set:data},(err)=>{
       if(err) throw err;
   }) 
}

async function deleteData(id){
    await employeeModel.deleteOne({_id:id},(err)=>{
        if(err) throw err;
    })
}

function loginData(data){
    console.log(data.email);
    employeeModel.find({$and:[{email:data.email}, {password:data.password}]},(err)=>{
        if(err) throw error;
        else return data;
    }).clone()
}

module.exports = {postData, getData, updateData,deleteData,loginData}
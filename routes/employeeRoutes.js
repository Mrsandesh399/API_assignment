const express = require("express");
const router = express.Router();
const {postData,getData,updateData,deleteData,loginData} = require("../controller/empController")

router.post("/postdata",(req,res)=>{
    console.log(req)
    postData(req.body)
    res.send("Employee data added");
})

router.get("/getdata",async(req,res)=>{
    // res.send(getData());
    res.send(await (getData()));
})

router.put("/updatedata/:id",(req,res)=>{
    updateData(req.params.id,req.body);
    res.send("Employee data is updated")
})

router.delete("/deletedata/:id",(req,res)=>{
    deleteData(req.params.id);
    res.send("Employee data is deleted");
})

router.post("/login",(req,res)=>{
    loginData(req.body);
    res.send("Welcome user")
})

module.exports = router;
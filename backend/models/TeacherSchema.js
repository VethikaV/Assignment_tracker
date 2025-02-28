const mdb = require("mongoose");

const teacherSchema=mdb.Schema({
    sName:String,
    sDepartment:String,
    address:String,
    phoneNumber:Number,
})

const teacher_schema=mdb.model("teacher",teacherSchema)
module.exports = teacher_schema

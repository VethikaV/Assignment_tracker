const mdb = require("mongoose");

const studentSchema=mdb.Schema({
    sName:String,
    sBatch:Number,
    fatherName:String,
    motherName:String,
    address:String,
    phoneNumber:Number,
})

const student_schema=mdb.model("student",studentSchema)
module.exports = student_schema

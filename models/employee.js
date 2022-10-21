const mongoose = require('mongoose'); //intialisation
const { stringify } = require('querystring');
//schema definition
const Schema = mongoose.Schema;
const employee_detail = new Schema({
    name: String,
    location: String,
    position: String,
    salary: Number
})
const EmployeeData = mongoose.model('employer', employee_detail);
module.exports = EmployeeData;
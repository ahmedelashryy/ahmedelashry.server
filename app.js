
const express = require('express');
const mongoose = require('mongoose');

let app = express();
mongoose.connect("mongodb://localhost:27017/yourdbname", (err) => {
  if (!err) console.log("Server is Runing Now");
  else console.log("error");
});
const studentSchema = new mongoose.Schema({
    name: String,
    Phone: String,
    age: Number,
    hope: String,
  });
  
  const Student = mongoose.model("Student", studentSchema); 
  
 
  let student = new Student({
    name: "Ahmed",
    Phone: "01275400378",
    age: 21,
    hope: "sweming , football , basketball",
  }).save();

let computer_eng = new Student({
    name: "mohamed",
    Phone: "01275400378",
    age: 21,
    hope: "html , css , js",
  }).save();
  
  app.get('/employee', async (req, res) => {
    try {
      let allstds = await Course.find();
      console.log(allstds.length);
      res.status(200).json(allstds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/course', async (req, res) => {
    try {
      let alldeps = await Department.find();
      console.log(alldeps.length);
      res.status(200).json(alldeps);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
    
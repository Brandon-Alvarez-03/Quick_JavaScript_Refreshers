const mongoose = require("mongoose")

// Configuration Options For Connection
const options = {
  // Insert your database name below
  dbName: "exampleDataBase"
}

const connection = mongoose.connect("mongodb://localhost:27017", options, (err) => {
  if(err){
    console.log(err)
  }else{
    console.log(`Successfully connected to ${options.dbName}`)
  }
})

exports.default = connection


const express = require('express');
const route = require('./routes/route');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();

mongoose.set('strictQuery', true);
app.use(express.json());

mongoose.connect("mongodb+srv://PoojaFunctionUp:PA44yjApvizLJGOY@cluster0.newxzkv.mongodb.net/Pooja1508-Db?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=> console.log("MongoDb is connected"))
.catch((error)=> console.log(error))

app.use('/', route);

app.listen(process.env.PORT || 3000, function(){
console.log("Express running on Port" + (process.env.PORT || 3000))
});
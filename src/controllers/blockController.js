const { default: axios } = require('axios');
const blockModel = require('../models/blockModel');

const getBlock =  async function(req, res){
 try{

    let options = {
       headers: {Authorization:"Bearer 2d12e5cf-aa9a-4acd-bb97-5cb3c65c220c"},
       method: "get",
       url: `https://api.coincap.io/v2/assets`
    }
    let result = await axios(options)
    console.log(result)
    let data = result.data.data
const sortdata = data.sort((a, b) => { return a.changePercent24Hr - b.changePercent24Hr }); 
        
    await blockModel.deleteMany() 

    let block = await blockModel.create(sortdata)

    let finalBlocks = await blockModel.find().select({__v:0, _id:0}) 

    return res.status(201).send({staus:true, message:"Blocks successfully created", data:finalBlocks})

 }catch(error){
    return res.status(500).send({status:false, message: error.message})

 }
}
module.exports = {getBlock}



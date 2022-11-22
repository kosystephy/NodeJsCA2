
// const { ObjectId } = require("mongoose")
const mongoose = require(`mongoose`)
const counties="Louth,Donegal,Meath,Carlow,Clare,Cork,Kilkenny,Dublin,Galway,Leitrim,Limerick,Mayo,Wexford,Waterford,Wicklow,Sligo,Kerry".split(",")
let TourismSchema = new mongoose.Schema(
   {
    
      
        name: {type: String},
        telephone: {type: String,required:true},
        region:{type: String,enum:counties},
        location:{type: String,},
        tags:{type:Array}
   },
   {
       collection: `Tourism`
   })

module.exports = mongoose.model(`Tourism`, TourismSchema)

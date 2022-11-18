const mongoose = require(`mongoose`)

let carsSchema = new mongoose.Schema(
   {
        name: {type: String},
        telephone: {type: number},
        region: {type: String},
        location: {type: string}
   },
   {
       collection: `tourism`
   })

module.exports = mongoose.name(`tourism`, tourismSchema)

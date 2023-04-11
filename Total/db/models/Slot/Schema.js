import db from '@db'
let mongoose = require('mongoose')
const SlotSchema = new mongoose.Schema({
    name:String,
    globalTime:String,
    time:String,
    removeAt: { type: Date, expires: 0 },
 //   removeAt: { type: Date, expires: 3600, default: Date.now },
    room:{
        ref:'Room',
        type:mongoose.Schema.Types.ObjectId,
    },


  // createdAt: { type: Date, expires: '1m', default: Date.now }

})

module.exports = mongoose.models.Slot || mongoose.model('Slot', SlotSchema)
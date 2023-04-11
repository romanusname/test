import db from '@db'
let mongoose = require('mongoose')
const RoomSchema = new mongoose.Schema({
    path:String,
    slots:[{type: mongoose.Schema.Types.ObjectId, ref: 'Slot'}]
},
    {
        statics: {
            async create(e) {
                const room = new db.room({})
                room.path = e.name
                room.save().then(() => console.log('Create Room'));
            }
        }
    }
    )


module.exports = mongoose.models.Room || mongoose.model('Room', RoomSchema)
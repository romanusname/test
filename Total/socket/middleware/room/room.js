//import cookie from "cookie";
//import total from "@total";
import db from "@db"

export default function room(io) {
    io.use(async(socket, next) => {
        socket.createRoom = db.room.create
        next();
    });

    io.use(async(socket, next) => {
       // socket.createSlot = db.slot.create
        socket.createSlot = async (e)=>{
           // db.slot.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 30 } )

            const room = await db.room.findOne({path:'test'})
            const slot = new db.slot({})
            slot.name = 1
            slot.time = e.time
            slot.removeAt = e.time
            slot.room = room._id
            slot.save().then(() => console.log('Create Slot'));
            room.slots.push(slot)
            room.save()

            //await db.slot.collection.insertOne({})
        }
        next();
    });

    io.use(async(socket, next) => {
        socket.getSlots = async (e)=> {
          //  const room = await db.room.findOne({path: 'test'}).populate('slots')
            const room = await db.room.findOne({path: 'test'}).populate({path: 'slots', options: { sort: { 'globalTime': 1 } } })
            const slots = room.slots
          //  slot.globalTime = slot.globalTime - socket.differenceTimezone
            socket.emit('responseSlots',slots)
        }
        next();
    });

}
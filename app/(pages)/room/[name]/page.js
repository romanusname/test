import part from '@part'
import db from '@db'
import Appointment from '../../../../widgets/displays/appointment/appointment'
export default async function page({params}) {
    db.connect()
//    const room = await db.room.findOne({path:params.name})
 //   let name = params.name
 //   if(!room) name = 'комната не найдена'
  //  {name}


    /*const slot = await db.slot.findOne({name:'123'}).populate('room')
    console.log(slot)
    console.log(slot.room)*/

    const room = await db.room.findOne({path:params.name}).populate('slots')
    const cars = JSON.parse(JSON.stringify(room))
    console.log(cars)
 //   console.log(room)
  //  console.log(room.slots)
   // const slots = room.toJSON()
   // const data = await slots.json()
// <h1>{room.slots[0].globalTime}</h1>
    return(
        <part.main>
            <section>
                <flex area={'middle'}>
                    <Appointment room={cars}>

                    </Appointment>
                </flex>
            </section>
        </part.main>
    )
}
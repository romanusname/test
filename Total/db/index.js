import connect from './connect'
import User from './models/User/Schema'
import Room from './models/Room/Schema'
import Slot from './models/Slot/Schema'
export default function index() {

}

index.connect = connect
index.user = User
index.room = Room
index.slot = Slot
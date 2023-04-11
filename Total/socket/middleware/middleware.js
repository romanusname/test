import total from "@total";
import cookie from "cookie";
import alert from "./alert/alert";
import events from './events/events'
import user from './user/user'
import utils from './utils/utils'
import room from './room/room'
//import bcrypt from 'bcrypt'
import db from "@db";
//import languadge from "./alertCods/languadge1";

export default function middleware(io) {
    io.use((socket, next) => {
        db.connect()
        next();
    });

    utils(io)
    alert(io)
    events(io)
    user(io)
    room(io)

}
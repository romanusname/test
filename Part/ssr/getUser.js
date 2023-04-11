//import User from "../../Total/db/models/User/Schema";
import db from '@db'

export default async function getUser(ssr,token) {
    ssr.User = {}
        const user = await db.user.findOne({token: token.value})
      //  const user = await db.user.findOne({token: token.value})
        ssr.User.email = user.email
        ssr.User.role = user.role
}
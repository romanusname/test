//import User from "../../Total/db/models/User/Schema";
import db from '@db'

export default async function getUsers(ssr) {
    ssr.Users = []
    const users = await db.user.find()

    for (let i = 0; i<users.length; i++){
        let user = {}
        user.email = users[i].email ?? 'not'
        user.role = users[i].role
        ssr.Users.push(user)
    }

}
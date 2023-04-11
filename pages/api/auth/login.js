//import total from "@total";
import db from '@db'
import cookie, {serialize} from "cookie";

export default async function login(req, res) {
    db.connect()
    const user = await db.user.findOne({logintoken:req.headers.logintoken})

    if(!user){
        return res.status(201).json({status: 'login'})
    }

    user.logintoken = undefined
    user.save()

    res.setHeader('Set-Cookie', [
        serialize('token', user.token, {maxAge: 31536000000,path: '/',httpOnly:true}),
    ])

    return res.status(201).json({status: 'login'})
}
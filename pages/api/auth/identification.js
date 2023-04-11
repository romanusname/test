import total from "@total";
import db from '@db'
export default async function identification(req, res) {
    db.connect()

    if(req.headers.token=='false') {
        const token = await db.user.create()
        console.log(token)
        return res.json({status:false,token})
    }

    const user = await db.user.findOne({token:req.headers.token})
    if(!user){
        const token = await db.user.create()
        console.log(token)
        return res.json({status:false,token})
    }



        return  res.json({status:true})


}
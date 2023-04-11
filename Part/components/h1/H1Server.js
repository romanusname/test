import dbConnect from '@mongoose/dbConnect'
import User from '@models/User'
//import H1 from './H1'
export default async function H1Server({children}){
    await dbConnect()
    const user = await User.findOne({role:'user'})
   /// console.log(user)
      //  <H1>{user.email}</H1>
    return (
        <h1>{user.email}</h1>
    )
}
import db from '@db'
import jwt from 'jsonwebtoken'
let mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    refreshToken:String,
    token:String,
    logintoken: String,
    email:String,
    password:String,
    role:{type:String,default:'guest'},
    name:String,
    socketID:String,
},
    {
        statics: {
            async create() {
                const token = jwt.sign({
                    data: 'foobar'
                }, 'secret', {expiresIn: '1h'});

                const user = new db.user({})
                user.token = token
                user.save().then(() => console.log('Create User'));
              //  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNjc3Njk1ODgzLCJleHAiOjE2Nzc2OTk0ODN9.xVqNK0WRl5xaCjW8TYaWa35kWfWL1ypHwzkPfqhUEoU'

                return token
            }
        }
    }
    )


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
//import mongoose from 'mongoose'
let mongoose = require('mongoose');

const connection = {} /* creating connection object*/

async function connect() {
    /* check if we have connection to our databse*/
    if (connection.isConnected) {
        return
    }

    mongoose.set("strictQuery", true);
    /* connecting to our database */
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'db'
    })

    connection.isConnected = db.connections[0].readyState
}

export default connect




/*

import mongoose from 'mongoose'

/!**
 Source :
 https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js
 **!/


const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

/!**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 *!/
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'db'
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect*/

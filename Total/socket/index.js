import server from './server'
import middleware from "./middleware/middleware"
import connection from './connection'
export default function index() {

}

index.server = server
index.middleware = middleware
index.connection = connection
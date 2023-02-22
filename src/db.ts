import {connect} from "mongoose";

export async function connection() {
    await connect('mongodb://127.0.0.1:27017/koy',{});
    console.log('Database connected')
}
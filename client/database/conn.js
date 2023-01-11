import mongoose from 'mongoose'
require("dotenv").config();
const { MONGOHOST, MONGOPASSWORD, MONGOPORT, MONGOUSER } = process.env;
const uri = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`;

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(uri)

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    } catch (error) {
        
    }
}

export default connectMongo;
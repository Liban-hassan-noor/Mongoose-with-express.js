//import { Schema } from "mongoose"
import {model,Schema} from 'mongoose'

const logschema = new Schema({
    status:{
        type:String,
        required:true
    }
}
,{
    timestamps:true
})


const Log = new model ("log",logschema);
export {Log}
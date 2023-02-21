import {model, Schema} from "mongoose";
import mongoose from "mongoose";


const mainSchema = new mongoose.Schema({
    content: [{
        heading: String,
        description: String,
        h_description: String,
        number: String,
        image: String,
        default: []
    }],
    page: String
});


const Page = mongoose.models.Page || mongoose.model('Page', mainSchema);


export default Page
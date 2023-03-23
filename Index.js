import express from "express";
const app = express();
import mongoose from "mongoose";
//mongodb://localhost:27017

const pass = 'Bhawishya11';
const collection_name = 'ecom';
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`
mongoose.connect(mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const prod = mongoose.Schema({
    name: String,
    roll: Number
});
const ab = async () =>
{
    // ea  jo nanus likha ha n hamysa collection may s layga example
    // ecoms ager nhe lagwo ge to new ban jayga mongo atlas may
    let mod = mongoose.model("nanus", prod);
    let data = new mod({
        name:"lolly singh",
        roll:15
    });
    await data.save();
}
 ab()

const finds = async () =>
{
    let modi = await mongoose.model("nanus", prod).find({ roll: 15 });
    if(modi)console.log(modi)
}

finds()

// const update = async () =>
// {
//     let modi = await mongoose.model('product', prod).updateOne({
//         name:"Bhawishya singh"
//     },
//     $ set:{name:"lolly singh"})
//  }

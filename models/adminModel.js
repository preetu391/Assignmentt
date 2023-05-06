const mongoose = require ("mongoose")

const adminSchema= mongoose.Schema({
    field:{type:String, required: true}
}, {
    versionKey: false
})

const adminModel= mongoose.model("admin",adminSchema);

module.exports = {
    adminModel,
};
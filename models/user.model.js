const mongoose = require("mangoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdJobs: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: false,
    },
    appliedJobs: {
        type: Schema.Types.ObjectId,
        ref: "Application",
        required: true,
    },
    savedJobs: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
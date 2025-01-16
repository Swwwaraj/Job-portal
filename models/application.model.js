const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobApplicationSchema = new Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    status: {
        // enum states for status
        type: String,
        enum: ["pending", "accepted", "rejected"],
        required: true,
        default: "pending",
    }
});
module.exports = mongoose.model("Application", jobApplicationSchema);
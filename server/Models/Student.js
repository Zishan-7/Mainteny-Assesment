const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    address: { type: String, required: true },
    courses: [
      {
        courseName: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);

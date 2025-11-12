import mongoose, { Schema, models } from "mongoose";

const commentSchema = new Schema(
  {
    name: String,
    email: String,
    movie_id: mongoose.Schema.Types.ObjectId,
    text: String,
    date: Date,
  },
  { collection: "comments" } // ✅ force Mongoose to use existing "comments"
);

const Comment = models.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
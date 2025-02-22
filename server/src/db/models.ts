import mongoose, { Schema } from "mongoose";

const PastMemberSchema = new Schema({
  name: String,
  image: String,
  description: String,
});
export const PastMemberModel = mongoose.model("past_member", PastMemberSchema);

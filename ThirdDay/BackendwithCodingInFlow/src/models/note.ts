import mongoose, { InferSchemaType, Schema } from "mongoose";

const noteSchema: Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
    time: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

type Note = InferSchemaType<typeof noteSchema>

export default mongoose.model<Note>("Note", noteSchema)

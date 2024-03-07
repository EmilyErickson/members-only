const messageSchema = new Schema({
  title: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

import mongoose from "mongoose";

// Creating Message Model:
// senderId, receiverId, and message are inside the Message Model
// senderId and receiverId are references to the User Model
// timestamps: true option automatically creates updatedAt and createdAt fields

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    message: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

export default Message;
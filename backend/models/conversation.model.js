import mongoose from "mongoose";


// Creating Conversation Model:
// participants[] is an ARRAY of references to the User Model, consisting of the participants of the conversation
// messages[] is an ARRAY of references to the Message Model, consisting of the messages in the conversation

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [], // default value is an empty array
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
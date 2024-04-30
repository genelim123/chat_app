import Conversation from "../models/Conversation.model.js";
import Message from "../models/Message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        // New Conversation / Conversation DOES NOT exist
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id); // Push the new message to the conversation
        }

        // Socket IO Functionality will be here


        // await conversation.save();
        // await newMessage.save();

        // Can be done in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({ message: "Message Sent Successfully:", newMessage });


    } catch (error) {
        console.log("Error in sending message controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},
        }).populate("messages"); // .populate("messages"): Populate the messages field in the conversation

        if(!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
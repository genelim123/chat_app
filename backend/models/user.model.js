import mongoose from "mongoose";

// Creating User Model

// User Schema
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: "",
    },
},
    // timestamps: true option automatically creates updatedAt and createdAt => member since <createdAt> 
    { timestamps: true });

// User Model using User Schema
const User = mongoose.model("User", userSchema);

export default User;

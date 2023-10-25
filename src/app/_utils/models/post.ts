import mongoose from "mongoose"


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: String,
    categories: Array,
    tags: Array,
    author: {
        name: String,
        imageUrl: String
    },
    media: String,
    file: String
    }
)

export const Post = mongoose.models.Post || mongoose.model('Post', schema)
import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        required: false,
      },
      time : { 
        type : Date,
        default: Date.now }
}
)

const Post = mongoose.model("post",postSchema)
export default Post
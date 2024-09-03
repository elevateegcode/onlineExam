import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength:[3," title is too short"],
        maxLength:[20," title is too long"],
        trim: true,
        unique: true
    },
    slug: {
        type:String,
        required: true,
        lowercase: true
    },
    icon: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps : true
});


schema.post("init", function(doc) {
    doc.icon = process.env.BASE_URL + "uploads/categories/" + doc.icon
})

const categoryModel = mongoose.model("Category", schema);

export default categoryModel;


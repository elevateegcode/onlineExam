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
    icon:String,
    type: String,
    exam: {
        type: mongoose.Types.ObjectId,
        ref:"Exam"
    },
    choices: [String],
}, {
    timestamps : true
});


schema.post("init", function(doc){
    doc.logo = process.env.BASE_URL +'uploads/' + doc.icon
})

const examModel = mongoose.model("Exam", schema);

export default examModel;






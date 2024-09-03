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
    duration:{
        type:Number,
        min: 20,
        max: 180
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    active: {
        type:Boolean,
        enum:[true,false],
        default: true
    },
    startDate: Date,
    endDate: Date
}, {
    timestamps : true
});


schema.post("init", function(doc){
    doc.logo = process.env.BASE_URL +'uploads/' + doc.icon
})

const examModel = mongoose.model("Exam", schema);

export default examModel;






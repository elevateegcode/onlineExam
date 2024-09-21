import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps : true,
    versionKey:false,
    toJSON: { virtuals: true }
});


schema.post("init", function(doc){
    doc.logo = process.env.BASE_URL +'uploads/' + doc.icon
})


schema.virtual('questions', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'exam'
  });
const examModel = mongoose.model("Exam", schema);

export default examModel;






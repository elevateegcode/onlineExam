import mongoose from 'mongoose';

import bcrypt from 'bcrypt'
const schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    firstName:String,
    lastName:String,
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: String,
    role: {
        type:String,
        enums: ["admin","user"],
        default: "User",
        lowercase:true
    },
    password:{
        type:String,
        required: true
    },
    isVerfied: {
        type:Boolean,
        default: false
    },
    changePasswordAt: Date,
}, {
    timestamps : true
});

schema.pre("save" ,function() {
    this.password = bcrypt.hashSync(this.password,parseInt(process.env.SALTROUND))
})


schema.pre("findOneAndUpdate" ,function() {
    if(this._update.password)
        this._update.password = bcrypt.hashSync(this._update.password,parseInt(process.env.SALTROUND))

})
const userModel = mongoose.model("User", schema);

export default userModel;






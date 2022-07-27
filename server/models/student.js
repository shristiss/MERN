import mongoose  from "mongoose";

const studentSchema= mongoose.Schema({
    urollno : Number,
    studentName: String,
    section: {
        type:String,
        default:'A'
    },
    grade: String
    
});

const student= mongoose.model('student',studentSchema);
export default student;
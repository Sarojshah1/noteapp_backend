const mongoose= require('mongoose');

const notesSchema=mongoose.Schema({
     id:{
        type:String,
        required:true,
        unique:true,
     },
     userid:{
        type:String,
        required:true,
     },
     title:{
        type:String,
        required:true,
     },
     content:{
        type:String,
     },
     dateadded:{
        type:Date,
        default:Date.now(),
     }


});

const Notes=mongoose.model('Notes',notesSchema);

module.exports=Notes;
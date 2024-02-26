const Notes = require("../models/notes");

async function handleGetAllNotes(req,res){
    const notes=await Notes.find();
    res.json(notes);
}
async function handleGetOneNotes(req,res){
    const notes=await Notes.find({userid:req.params.userid});
    res.json(notes);
}

async function handlePostNotes(req,res){
    const body=req.body;
    try{
        const result= await Notes.create({
            id:body.id,
            userid:body.userid,
            title:body.title,
            content:body.content
        })
        console.log(result);
        return res.status(201).json({ msg:"Success"});
    }catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "error" });
    }
}

async function handleDeleteNotes(req,res){
    try {
        await Notes.deleteOne({ id: req.body.id });
        return res.json({ msg: "Successfully deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error deleting note" });
    }
}

async function handleupdateNotes(req,res){
    const body=req.body;
    try {
        const updatedNote = await Notes.findOneAndUpdate(
            { id: body.id },
            { $set: { userid: body.userid, title: body.title,content:body.content } },
            { new: true } // Return the updated document
        );

        if (!updatedNote) {
            return res.status(404).json({ msg: "Note not found" });
        }

        return res.json({ msg: "Successfully updated", updatedNote });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error updating note" });
    }
}
module.exports ={
    handleGetAllNotes,
    handlePostNotes,
    handleGetOneNotes,
    handleDeleteNotes,
    handleupdateNotes
}
const express = require('express');
const {connectmongoDB}=require("./connection");
const router = require("./routes/note");

const app=express();
connectmongoDB("mongodb+srv://sarojahah152:6mXptOIdCM8ugLPx@cluster0.xjfur6c.mongodb.net/");
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/notes",router);
app.use("/api/notes/:userid",router);
app.use("/api/addnotes",router);
app.use("/api/deletenotes",router);
app.use("/api/updatenotes",router);

app.listen(port,()=>console.log(`starting the server at ${port}`));
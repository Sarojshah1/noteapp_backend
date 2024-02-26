const mongoose= require('mongoose');

async function connectmongoDB(url){
    return mongoose.connect(url).then(()=>console.log('connection started')).catch(()=>console.log('connection not started'));
}


module.exports={
    connectmongoDB
}
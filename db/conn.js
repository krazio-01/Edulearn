const mongoose = require('mongoose');

mongoose.connect("mongodb://URL", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection succesfull`);
}).catch((err) =>{
    console.log(`no connection`, err);
})
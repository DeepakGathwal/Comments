const mongoose = require('mongoose')
 const connection = async() => {
    try{
      await  mongoose.connect(`mongodb+srv://memories:memories@cluster0.s0ddatf.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true})
        .then((data) => {
            console.log(`Mongoose Connect ${data.connection.host}`);
        }).catch((err) => {
            console.log(err.message);
        })
    }catch(err){
        console.log(err.message);
    }
}
module.exports = connection;
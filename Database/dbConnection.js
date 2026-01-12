const mongoose = require('mongoose')

function dbConnection(){
    //conect to DB

    //rules 1
// mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:rita@expressnodejs.s97scz6.mongodb.net/${process.env.DB_PASSWORD}?appName=${process.env.DB_NAME}`)
//   .then(() => console.log('DB Connected!'));


//rules 2
mongoose.connect(
    `${process.env.DB_URL}`

)
 .then(() => console.log('DB Connected!'));

//rules 2 
//conect to DB

}

module.exports = dbConnection
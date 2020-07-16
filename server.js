const express = require('express')
const app = express();
const user = require('./routes/userRoute')
const admin = require('./routes/adminRoute')

//const neeew =  require('./routes/new')
const georoute = require('./routes/geoRoute')
var unless = require('express-unless');
var mongoose = require('mongoose');
var bodyparser = require('body-parser')
 

var path = require('path')
const verify = require('./verifytoken')
const dontenv = require('dotenv');

const multer = require('multer');
fs = require('fs-extra')



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())



 app.use('/uploads', express.static('uploads'));


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now()+'.jpg')
//     }
//   })
  
//   var upload = multer({ storage: storage })
  


mongoose.connect(process.env.dbconnect, {useNewUrlParser: true,useUnifiedTopology: true});


var urlencodedParser = bodyparser.urlencoded({ extended: false })



mongoose.connection.on('connected',()=>{
    console.log('connected to databaseat at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    } 
})



// var swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./swagger.json')

//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//     app.use('/api/v1', authRoute,product,cart,ccat,admin);

// app.use(verify.unless({
//     path: [
//       '/api/admin',
//       { url: '/', methods: ['GET', 'PUT','POST']  }
//     ]
//   }))

app.use('/api/user',user)
app.use('/api/admin',admin)
app.use('/api',georoute);


// app.use((req, res, next) => {
//     const error = new Error();
//     error.message = 'Not Found';
//     error.status = 404;
//     next(error);
// });


// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({
//         error: error
//     });
// });

//app.use(paginate.middleware(5, 5));

app.listen(3000,() => console.log('server is running on 3000'));

module.exports = app
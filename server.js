const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Connection String for MongoDB Created By Syed Wajahat Imam

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, 
{  useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});    
});






// const Request = require('request');

// Request.post({
//     url: 'http://10.200.68.169:9142/api/v1/customer/cnic/limit',
//             path: '/',
//             port: '9142',
//         headers :{'Content-Type':'application/json',
//         'x-req-id':'123320149','x-channel-id':'MB',
//         'x-sub-channel-id':'MB','x-country-code':'92'},
//           body: JSON.stringify({
//             customerNumber:"CCERRR"
//           }) 
//         },(error,response,body)=>{
//             if(error){
//                 return console.dir(error);
//             }
//             console.dir(JSON.parse(body));
//         }

// );






// const Request = require('request');

// Request.post({
//     url: 'http://10.200.68.169:9142/api/v1/loan/collateral/information',
//             path: '/',
//             port: '9142',
//         headers :{'Content-Type':'application/json',
//         'x-req-id':'123320149','x-channel-id':'MB',
//         'x-sub-channel-id':'MB','x-country-code':'92'},
//           body: JSON.stringify({
//             "collateralType": "A24",
//             "collateralReference": "B1ABFQ A24",  
//              "dealType": "",  
//              "dealBranch": "",    
//              "dealReference": "",
//              "accountNumber": "",
             
//           }) 
//         },(error,response,body)=>{
//             if(error){
//                 return console.dir(error);
//             }
//             console.dir(JSON.parse(body));
//         }

// );


// require('./app/routes/email.routes')(app);
require('./app/routes/coldesc.routes')(app);

//app.use(require('./app/controllers'));
require('./app/routes/custdemo.routes.js')(app);
require('./app/routes/doc.routes.js')(app);
require('./app/routes/note.routes.js')(app);
require('./app/routes/users.routes.js')(app);
require('./app/routes/login.routes.js')(app);
require('./app/routes/customerDemographic.routes.js')(app);
require('./app/routes/roles.routes.js')(app);
require('./app/routes/cplogbookApproved.routes.js')(app);
require('./app/routes/defanddeferral.routes.js')(app);
require('./app/routes/cplogbookdraft.routes.js')(app);
require('./app/routes/cpConditionMonitoring.router.js')(app);
//require('./app/routes/email.routes.js')(app);
require('./app/routes/email.routes.js')(app);
require('./app/routes/sbpWaiver.routes.js')(app);
require('./app/routes/safeInOutRegister.routes.js')(app);
require('./app/routes/insuranceTickler.routes.js')(app);
require('./app/routes/stockReportTickler.routes.js')(app);
require('./app/routes/stockInspectionTickler.routes.js')(app);
require('./app/routes/pledgeStockInspectionTickler.routes.js')(app);
require('./app/routes/pledgejointstockInspectionTickler.routes.js')(app);
require('./app/routes/valuationExpiryTickler.routes.js')(app);
require('./app/routes/legalReviewTickler.routes.js')(app);
require('./app/routes/limitFeedingPending.routes.js')(app);
require('./app/routes/vendorManagement.routes.js')(app);
require('./app/routes/branches.routes.js')(app);
require('./app/routes/doc.routesview.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
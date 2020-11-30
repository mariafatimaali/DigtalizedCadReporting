const Request = require('request');
exports.custdemo =async (req,res) => {
Request.post({
    url: 'http://10.200.68.169:9142/api/v1/customer/cnic/limit',
            path: '/',
            port: '9142',
        headers :{'Content-Type':'application/json',
        'x-req-id':'123320149','x-channel-id':'MB',
        'x-sub-channel-id':'MB','x-country-code':'92'},
          body: JSON.stringify({
            customerNumber : req.body.primeNumber
          }) 
        },(error,response,body)=>{
            if(error){
              res.send(error);
            }
            res.send(JSON.parse(body));
        }

);

      }

    
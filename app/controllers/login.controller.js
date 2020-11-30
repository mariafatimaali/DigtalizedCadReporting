const ActiveDirectory = require('activedirectory2');
const mongoose = require('mongoose');
const roles = require('../models/roles.model.js');




exports.login = async (req, res) => {
  var ad_result, check_reg;
  console.log(req);
  // ad_result
  ad_result = await activeDirectoryAuth(req.body.username, req.body.password);

  var authResp = await validateAuth(req.body.username);
  console.log(ad_result);
console.log(authResp);
  console.log("length " + authResp.length);
  if (ad_result.status == "00" && authResp.length > 0) {
    ad_result['roledata'] = authResp[0];
    //ad_result.push(authResp);
    //if (ad_result.status == "00"){
    res.send(ad_result);
    res.end();
  } else if (ad_result.status == "00" && authResp.length == 0) {
    console.log("unautorized");
    //res.send(ad_result);
    ad_result.message = "Unauthorized";
    res.send(ad_result);
    res.end();
  }
  else if (ad_result.status == "01") {
    ad_result.message = "Please enter the correct username or password";
    res.send(ad_result);
    res.end();
  } else {
    ad_result.message = "Invalid Input";
    res.send(ad_result);
    res.end();
  }
}

async function validateAuth(username) {
  return new Promise(async (resolve, reject) => {
    try {
      roles.find({ userid: username })
        .then(role => {
          if (!role) {
            resolve("Role Not Found");
          }
          resolve(role);
        }).catch(err => {
          resolve("Error Occur during fetching Roles " + err);
        });
      // resolve("Role Not Found");
    } catch (excep) {
      resolve("exception " + excep);
    }
  });
}
async function activeDirectoryAuth(name, password) {
  var response = { "status": "", "method": "", "message": "", "data": "" };

  return new Promise(async (resolve, reject) => {
    try {
      var config = {
        url: 'LDAP://10.16.0.112',
        baseDN: 'DC=domestic, DC=hbl,DC=com',
        username: 'DOMESTIC\\' + name,
        bindCredentials: password, //'Pakistan1',
        attributes: {
          user: []
        }
      };
      var ad = new ActiveDirectory(config);
      var username = "DOMESTIC\\" + name;
      ad.authenticate(username, password, function (err, auth) {
        if (err) {
          response.code = "99";
          response.message = err.message;
          response.method = "ad.authenticate";

          resolve(response);
        }

        if (auth) {
          console.log(username + " Authenticated!");

          var query = name;
          var adFindUser = new ActiveDirectory(config);
          adFindUser.findUser(query, true, function (err, groups) {
 
            if (err) {
              response.code = "99";
              response.message = err.message;
              response.method = "ad.findUser";

              resolve(response);
            }

            if (!groups) {
              response.status = "01";
              response.code = "01";
              response.message = 'User: ' + username + ' not found.';
              console.log('User: ' + username + ' not found.');
              resolve(response);
            } else {
              response.status = "00";
              response.code = "00";
              response.message = "success";
              response.data = JSON.parse(JSON.stringify(groups))
              console.log(JSON.stringify(groups));
              resolve(response);
            }
          });

        } else {
          response.code = "01";
          response.message = username + " Authentication failed!";
          resolve(response);
        }
      });

    } catch (excep) {
      response.code = "10";
      response.message = excep;
      console.log(excep);

      reject(response);
    }
  });

}




//   const roles = new Roles({

//     userid:req.body.userid, 
//     update: req.body.update , 
//     edit: req.body.edit , 
//     delete: req.body.delete , 
//     role:req.body.role
// });


//   exports.findOne = (req, res) => {
//     var name= req.params.userid
//     roles.find({userid:name})
//         .then(roles => {
//             if(!roles) {
//                 return res.status(404).send({
//                     message: "name not found with id " + req.params.userid
//                 });            
//             }
//             res.send(roles);
//         }).catch(err => {
//             if(err.kind === 'userid') {
//                 return res.status(404).send({
//                     message: "name not found with id " 
//                 });                
//             }
//             return res.status(500).send({
//                 message: "Error retrieving CustomerDemographic with id " 
//             });
//         });
//     };


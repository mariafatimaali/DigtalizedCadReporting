var express = require("express");
var router = express.Router();
const SBPWaiver = require('../models/sbpWaiver.model.js');
const soap = require('soap');
const { AnyElement } = require("soap/lib/wsdl/elements");
require('dotenv').config();

const url = "http://10.200.75.143/CADScanUploadWs/Service.svc?wsdl";

router.post('/v1/wsdl/encryptQuery/', async function(req, res) {

    // var cnic = req.body.CNIC;
    // var taskId = req.body.TaskID;
    // var usrPwd = "bpm.configuration,hbl@1234";
    // var pageName = req.body.PageName;
    // var custName = req.body.CustomerName;
    // var appId = req.body.ApplicationID;
    // var role = req.body.Role;

    var cnic = "0000000000000";
    var taskId = req.body.primeNumber;
    var usrPwd = "bpm.configuration,hbl@1234";
    var pageName = "Upload";
    var custName = "Test";
    var appId = "1234567";
    var role = "User";
console.log(req.body);
    var qData = cnic + "," + taskId + "," +  usrPwd + "," +  pageName + "," +  custName + "," +  appId + "," +  role;

    const result = await encryptQuery(qData);
    res.send(result);
    res.end();
});

async function encryptQuery(qData) {
    return new Promise(async(resolve, reject) => {
        let sendResponse = "";
        
        try {
            var args = { qData: qData };
            soap.createClient(url, function(err, client) {
                client.EncryptQuery(args, function(err, result) {
                    if (err) {
                        sendResponse = '{"responseCode":"03"}';
                        sendResponse = JSON.parse(sendResponse);
                        resolve(sendResponse);
                    }
                    resolve(result);
                });
            });
        } catch (err) {
            sendResponse = '{"responseCode":"04"}';
            sendResponse = JSON.parse(sendResponse);
            resolve(sendResponse);
        }
    });
}

module.exports = router;
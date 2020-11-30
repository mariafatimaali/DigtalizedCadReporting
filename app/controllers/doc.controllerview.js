var express = require("express");
var router = express.Router();
const SBPWaiver = require('../models/sbpWaiver.model.js');
const soap = require('soap');
const { AnyElement } = require("soap/lib/wsdl/elements");
require('dotenv').config();

const url = "http://10.200.75.143/CADScanUploadWs/Service.svc?wsdl";

exports.doc =async (req,res) => {

   // 0000000000000,undefined,bpm.configuration,hbl@1234,Upload,Test,1234567,User|7A41362D
    var cnic = "";
    var taskId = req.body.primeNumber;
    var usrPwd = "bpm.configuration";
    var Pwd ="hbl@1234"
    var pageName = "Viewer";
    var custName = "";
    var appId = "";
    var role = "";
    var region ="";
console.log(req.body);
    var qData = cnic + "," + taskId + "," +  usrPwd + ","+ Pwd + ","+  pageName + "," +  custName + "," +  appId + "," +  role+"," +region;
    console.log("obj",qData);
    const result = await encryptQuery(qData);
    res.send(result);
    res.end();


}
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
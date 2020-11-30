// // import soap from 'soap';
// //   var url = 'http://10.200.75.143/CADScanUploadWs/Service.svc';

// // var qData: any={

// //     CNIC:'',
// //     TaskID:'', 
// //     UserID:'',
// //     Password:'',
// //     PageName:'Upload',
// //     CustomerName:'',
// //     ApplicationID:'',
// //     Role:''
// // };
// //   soap.createClient(url, (createClientError, client: soap.Client) => {
// //   if (createClientError) {
// //     console.error(createClientError);
// //     return;
// //   }
// //   if (typeof client.EncryptQuery === 'function') {
// //     // const args = { id: faker.random.uuid() };
// //     client.EncryptQuery(qData, (getError, result) => {
// //       if (getError) {
// //         console.error(getError);
// //         return;
// //       }
// //       console.log('EncryptQuery: ', result);
// //     });
// //   } else {
// //     console.error('client.EncryptQuery is not a function');
// //   }

 
  
// // });

// function nadraAccountRequest(franchizeID, xmlData) {
//   return new Promise((resolve, reject) => {
   
//     if (config.nadra.account_action != 'test') {

//       const headers = {
//         "user-agent": "sampleTest",
//         "Content-Type": "text/xml;charset=UTF-8",
//         soapAction: config.nadra.account_action
//       };

//       let xmlnadra =
//         "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:nad='http://NADRA.Biometric.Verification'>" +
//         "<soapenv:Header/>" +
//         "<soapenv:Body>" +
//         "<nad:VerifyFingerPrints>" +
//         "<nad:franchizeID>" +
//         franchizeID +
//         "</nad:franchizeID>" +
//         "<nad:xml_request_data><![CDATA[" +
//         xmlData +
//         "]]></nad:xml_request_data>" +
//         "</nad:VerifyFingerPrints>" +
//         "</soapenv:Body>" +
//         "</soapenv:Envelope>";
//       (async () => {
//         try {
//           const { response } = await soapRequest(
//             config.nadra.account,
//             headers,
//             xmlnadra,
//             60000
//           );
//           const { body, statusCode } = response;
//           if (statusCode === 200) {

//             resolve(body);
//             return;
//           }

//           reject(statusCode);
//         } catch (err) {
//           reject(err)
//         }
//       })();

//     } else {

//       ////////////////// DEV

//       var checkparse = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><VerifyFingerPrintsResponse xmlns="http://NADRA.Biometric.Verification"><VerifyFingerPrintsResult>&lt;?xml version="1.0" encoding="utf-16"?&gt;&#xD;
//              &lt;BIOMETRIC_VERIFICATION xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"&gt;&#xD;
//                &lt;RESPONSE_DATA&gt;&#xD;
//                  &lt;RESPONSE_STATUS&gt;&#xD;
//                    &lt;CODE&gt;100&lt;/CODE&gt;&#xD;
//                    &lt;MESSAGE&gt;successful&lt;/MESSAGE&gt;&#xD;
//                  &lt;/RESPONSE_STATUS&gt;&#xD;
//                  &lt;SESSION_ID&gt;2353100000393515376&lt;/SESSION_ID&gt;&#xD;
//                  &lt;CITIZEN_NUMBER&gt;4210130096913&lt;/CITIZEN_NUMBER&gt;&#xD;
//                  &lt;PERSON_DATA&gt;&#xD;
//                    &lt;NAME&gt;محمد ہارون ممتاز&lt;/NAME&gt;&#xD;
//                    &lt;FATHER_HUSBAND_NAME&gt;محمد ممتاز علی&lt;/FATHER_HUSBAND_NAME&gt;&#xD;
//                    &lt;PRESENT_ADDRESS&gt;‮مکان‪ ‬نمبر‪A-50‬،‪ ‬محلہ‪ ‬گلزار‪ ‬ہجری‪ ‬اسکیم‪ 33‬،‪ ‬کراچی‪ ‬شرقی‬&lt;/PRESENT_ADDRESS&gt;&#xD;
//                    &lt;PERMANANT_ADDRESS&gt;‮مکان‪ ‬نمبر‪b-62‬،‪ ‬بلاک‪ ‬ایچ،‪ ‬محلہ‪ ‬نارتھ‪ ‬ناظم‪ ‬آباد،‪ ‬کراچی‪ ‬وسطی‬&lt;/PERMANANT_ADDRESS&gt;&#xD;
//                    &lt;DATE_OF_BIRTH&gt;16-8-1984&lt;/DATE_OF_BIRTH&gt;&#xD;
//                    &lt;BIRTH_PLACE&gt;کراچی وسطی,کراچی وسطی&lt;/BIRTH_PLACE&gt;&#xD;
//                    &lt;PHOTOGRAPH&gt;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&lt;/PHOTOGRAPH&gt;&#xD;
//                    &lt;EXPIRY_DATE&gt;2026-08-23&lt;/EXPIRY_DATE&gt;&#xD;
//                  &lt;/PERSON_DATA&gt;&#xD;
//                  &lt;CARD_TYPE&gt;smartid&lt;/CARD_TYPE&gt;&#xD;
//                &lt;/RESPONSE_DATA&gt;&#xD;
//              &lt;/BIOMETRIC_VERIFICATION&gt;</VerifyFingerPrintsResult></VerifyFingerPrintsResponse></s:Body></s:Envelope>`;

//       // var checkparse = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><VerifyFingerPrintsResponse xmlns="http://NADRA.Biometric.Verification"><VerifyFingerPrintsResult>&lt;?xml version="1.0" encoding="utf-16"?&gt;&#xD;
//       //             &lt;BIOMETRIC_VERIFICATION xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"&gt;&#xD;
//       //               &lt;RESPONSE_DATA&gt;&#xD;
//       //                 &lt;RESPONSE_STATUS&gt;&#xD;
//       //                   &lt;CODE&gt;121&lt;/CODE&gt;&#xD;
//       //                   &lt;MESSAGE&gt;invalid finger index&lt;/MESSAGE&gt;&#xD;
//       //                 &lt;/RESPONSE_STATUS&gt;&#xD;
//       //                 &lt;SESSION_ID&gt;2353100000393269696&lt;/SESSION_ID&gt;&#xD;
//       //                 &lt;CITIZEN_NUMBER&gt;4210130096913&lt;/CITIZEN_NUMBER&gt;&#xD;
//       //                 &lt;FINGER_INDEX&gt;&#xD;
//       //                   &lt;FINGER&gt;1&lt;/FINGER&gt;&#xD;
//       //                   &lt;FINGER&gt;6&lt;/FINGER&gt;&#xD;
//       //                   &lt;FINGER&gt;3&lt;/FINGER&gt;&#xD;
//       //                   &lt;FINGER&gt;8&lt;/FINGER&gt;&#xD;
//       //                 &lt;/FINGER_INDEX&gt;&#xD;
//       //               &lt;/RESPONSE_DATA&gt;&#xD;
//       //             &lt;/BIOMETRIC_VERIFICATION&gt;</VerifyFingerPrintsResult></VerifyFingerPrintsResponse></s:Body></s:Envelope>`;

//       // var checkparse = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><VerifyFingerPrintsResponse xmlns="http://NADRA.Biometric.Verification"><VerifyFingerPrintsResult>&lt;?xml version="1.0" encoding="utf-16"?&gt;&#xD;
//       //             &lt;BIOMETRIC_VERIFICATION xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"&gt;&#xD;
//       //               &lt;RESPONSE_DATA&gt;&#xD;
//       //                 &lt;RESPONSE_STATUS&gt;&#xD;
//       //                   &lt;CODE&gt;175&lt;/CODE&gt;&#xD;
//       //                   &lt;MESSAGE&gt;transaction id already exist&lt;/MESSAGE&gt;&#xD;
//       //                 &lt;/RESPONSE_STATUS&gt;&#xD;
//       //                 &lt;SESSION_ID&gt;&lt;/SESSION_ID&gt;&#xD;
//       //                 &lt;CITIZEN_NUMBER&gt;4210130096913&lt;/CITIZEN_NUMBER&gt;&#xD;  //
//       //               &lt;/RESPONSE_DATA&gt;&#xD;
//       //             &lt;/BIOMETRIC_VERIFICATION&gt;</VerifyFingerPrintsResult></VerifyFingerPrintsResponse></s:Body></s:Envelope>`;

//       resolve(checkparse);

//     }

//   });
// }

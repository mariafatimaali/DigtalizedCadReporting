//   var soap = require('soap');
//   var url = 'http://10.200.75.143/CADScanUploadWs/Service.svc';
//   String qData = {
      
//       CNIC:'',
//       TaskID:'', 
//       UserID:'',
//       Password:'',
//       PageName:'Upload',
//       CustomerName:'',
//       ApplicationID:'',
//       Role:''

//   };


//   soap.createClient(url, (createClientError, client: soap.Client) => {
//   if (createClientError) {
//     console.error(createClientError);
//     return;
//   }
//   if (typeof client.EncryptQuery === 'function') {
//     const args = { id: faker.random.uuid() };
//     client.EncryptQuery(qData, (getError, result) => {
//       if (getError) {
//         console.error(getError);
//         return;
//       }
//       console.log('EncryptQuery: ', result);
//     });
//   } else {
//     console.error('client.EncryptQuery is not a function');
//   }

//   // or
// //   if (typeof client.getUserByIdAsync === 'function') {
// //     const args = { id: faker.random.uuid() };
// //     (client as any)
// //       .getUserByIdAsync(args)
// //       .then((result) => {
// //         console.log('getUserByIdAsync: ', result);
// //       })
// //       .catch(console.error);
//   }
// });

// //  // string EncryptQuery (string qData)
// //   exports.doc = async(req,res){
// //       var= doc_result;
// //       doc_result = MyFunction(req.body.args,
// //   }
// //   soap.createClient(url, function(err, client) {
// //       client.EncryptQuery(string qData) {
// //           console.log(result);
// //       });
// //   });
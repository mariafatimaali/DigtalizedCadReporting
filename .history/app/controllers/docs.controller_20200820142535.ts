import soap from 'soap';
  var url = 'http://10.200.75.143/CADScanUploadWs/Service.svc';

var qData: any={

    CNIC:'',
    TaskID:'', 
    UserID:'',
    Password:'',
    PageName:'Upload',
    CustomerName:'',
    ApplicationID:'',
    Role:''
};
  soap.createClient(url, (createClientError, client: soap.Client) => {
  if (createClientError) {
    console.error(createClientError);
    return;
  }
  if (typeof client.EncryptQuery === 'function') {
    // const args = { id: faker.random.uuid() };
    client.EncryptQuery(qData, (getError, result) => {
      if (getError) {
        console.error(getError);
        return;
      }
      console.log('EncryptQuery: ', result);
    });
  } else {
    console.error('client.EncryptQuery is not a function');
  }

 
  
});


module.exports = (app) => {

const roles =require ('../controllers/roles.controller');
    // Create a new Customer
    app.post('/user', roles.create);
    //get 
    app.get('/user', roles.findAll);
    //update
    app.put('/user', roles.update);
    //delete
    app.put('/user/delete', roles.delete);

app.delete('/maria',roles.deleterole);
}
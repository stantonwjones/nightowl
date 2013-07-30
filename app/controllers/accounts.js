// TODO: refractor db access to model
// TODO: refractor db config to config
var mongodb = require('mongodb');
var mongoserver = mongodb.Server('localhost', 27017);
var db_connector = new mongodb.Db('nightowl_users', mongoserver);
var collection;

db_connector.open(function(err, db) {
    db.createCollection('accounts', function(err, col) {
        collection = col;
    });
});

module.exports = Accounts;
function Accounts() {}
Accounts.prototype.login = function(params, request, response) {
    console.log('THE PARAMS ARE:', params);
    if (!params.email)
        return response.error({code: 400, message: 'email required'});
    if(!params.password) 
        return response.error({code: 400, message: 'password required'});
    collection.findOne(
        {_id: params.email, password: params.password},
        function(err, doc) {
            if(err || !doc) return response.error({code: 401, message:'Invalid Credentials'});
            response.cookies.set('user', params.email);
            response.render('userhome', {email: params.email});
        }
    );

}
Accounts.prototype.create = function(params, request, response) {
    // TODO: implement 'error' appview
    if (!params.email) return response.error({code: 400, message: 'email required'});
    if (!params.password) return response.error({code: 400, message: 'password required'});
    if (!params.verify_password)
        return response.error({code: 400, message: 'verify_password required'});
    if (params.password != params.verify_password)
        return response.error({code: 400, message: 'password and verify_password do not match'});
    // TODO: check to make sure the email does not already exist
    try {
        collection.insert({
            _id: params.email,
            email: params.email,
            password: params.password
        });
    }
    catch(e) {
        console.log(e.message + '\n' + e.stack);
    }
    //TODO: do something after this. set the cookie
    response.render('userhome', {email: params.email});
}

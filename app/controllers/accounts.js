// TODO: refractor db access to model
// TODO: refractor db config to config
var mongodb = require('mongodb');
var mongoserver = mongodb.Server('localhost', 27017);
var db_connector = new mongodb.Db('nightowl_users', mongoserver);
var collection;

db_connector.open(function(err, db) {
    db.createCollection('accounts', function(err, collection) {
        collection = collection;
    });
});

module.exports = Accounts;
function Accounts() {}
Accounts.prototype.login = function(params, request, response) {
}
Accounts.prototype.create = function(params, request, response) {
    // TODO: implement 'error' appview
    if (!params.email) response.render('error', {code: 400, message: 'email required'});
    if (!params.password) response.render('error', {code: 400, message: 'password required'});
    if (!params.verify_password)
        response.render('error', {code: 400, message: 'verify_password required'});
    if (params.password != verify_password)
        response.render('error', {code: 400, message: 'password and verify_password do not match'});
    // TODO: check to make sure the email does not already exist
    collection.insert({
        _id: params.email,
        email: params.email,
        password: params.password
    });
    //TODO: do something after this. set the cookie
}

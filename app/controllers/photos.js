var path = require('path');
var mongodb = require('mongodb');
var mongoserver = mongodb.Server('localhost', 27017);
var db_connector = new mongodb.Db('nightowl_users', mongoserver);
var collection;

db_connector.open(function(err, db) {
    db.createCollection('accounts', function(err, col) {
        collection = col;
    });
});

module.exports = Photos;
function Photos(){};
Photos.prototype.show = function(params, req, res) {
    // params.user can be me or an email
    if (params.user == 'me') {
        collection.findOne({_id: req.cookies.get('user')}, function(err, doc) {
            if(err) console.log('\n', err, '\n');
            //TODO: handle error
            var photos = doc ? doc.photos : [];
            res.render('gallery', {photos: photos});
        });
        return;
    }
    
}
Photos.prototype.upload = function(params, req, res) {
    var user = req.cookies.get('user');
    collection.update({_id: user}, { $push: { photos: params.picture }});
    this.show({user: 'me'}, req, res);

    console.log(params.picture);
    var basename = path.basename(params.picture.path);
    //params.picture.rename(path.join(__dirname, '..', 'public', basename));
    //res.end(JSON.stringify(params));
}


var jade = require('jade');
var path = require('path');
var template_path = path.join(__dirname, '../templates/gallery.jade');
var template = jade.compile(
    require('fs').readFileSync(template_path),
    {filename: template_path}
);

module.exports = Gallery;
function Gallery(){};
Gallery.prototype.render = function(params, response) {
    response.statusCode = 200;
    var photos = [];
    if (params.photos) params.photos.forEach(function(photo) {
        if(!photo) return;
        photos.push(path.basename(photo.path));
    });
    response.end(template({photos: photos}));
}

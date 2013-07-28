var jade = require('jade');
var path = require('path');
var template_path = path.join(__dirname, '../templates/home.jade');
var template = jade.compile(
    require('fs').readFileSync(template_path),
    {filename: template_path}
);

module.exports = Home;
function Home(){};
Home.prototype.render = function(params, response) {
    response.statusCode = 200;
    response.end(template(params));
}

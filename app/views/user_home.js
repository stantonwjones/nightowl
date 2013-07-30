var jade = require('jade');
var path = require('path');
var template_path = path.join(__dirname, '../templates/user_home.jade');
var template = jade.compile(
    require('fs').readFileSync(template_path),
    {filename: template_path}
);

module.exports = UserHome;
function UserHome(){};
UserHome.prototype.render = function(params, response) {
    response.statusCode = 200;
    response.cookies.set('user', params.email);
    response.end(template(params));
}

module.exports = function HomeController() {
    this.index = function(params, request, response) {
        response.render('home', params);
    }
    this.user = function(params, request, response) {
        var email = request.cookies.get('user');
        if (!email) response.error({
            code: 401,
            error: new Error('Not Authorized')
        });
        response.render('userhome', {email: email});
    }
}

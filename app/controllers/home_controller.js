module.exports = function HomeController() {
    this.index = function(params, request, response) {
        response.render('home', params);
    }
}

window.OWL = {};
OWL.util = {};
OWL.util.getTemplate = function( id ) {
    return _.template( document.getElementById(id).innerHTML );
}
/**
 * will set routes for changing view from home to newsfeed. May want to add modal opening here as well
 */
OWL.Router = Backbone.Router.extend({
    routes: {
        newsfeed: 'newsfeed',
        'newsfeed/expand/:id': 'expand_newsfeed_item',
        home: 'home',
        login: 'login',
        signup: 'signup'
    }
});

/**
 * TODO: define two collections: newsfeed and homegallery
 * TODO: define post model for those collections.
 */
OWL.Models = {};
OWL.Collections = {};

OWL.Collections.Newsfeed = Backbone.Collection.extend({
});
OWL.Collections.MyPhotos = Backbone.Collection.extend({
});

/**
 * TODO: define views:
 *  menu view (can listen directly to router)
 *  newsfeed view
 *  gallery view
 *  MAYBE post view to handle modal expansions
 */
OWL.Views = {};

OWL.Views.TopMenu = Backbone.View.extend({
    initialize: function() {
        this.template = OWL.util.getTemplate('TopMenuTemplate');
    },
    render: function() {}
});
OWL.Views.Login = Backbone.View.extend({
    initialize: function() {
        this.template = OWL.util.getTemplate('LoginTemplate');
    }
});
OWL.Views.SignUp = Backbone.View.extend({
    initialize: function() {
        this.template = OWL.util.getTemplate('SignupTemplate');
    }
});
OWL.Views.Newsfeed = Backbone.View.extend({
    initialize: function() {
        this.template = OWL.util.getTemplate('NewsfeedTemplate');
    }
});
OWL.Views.MyPhotos = Backbone.View.extend({
    initialize: function() {
        this.template = OWL.util.getTemplate('MyPhotosTemplate');
    }
});

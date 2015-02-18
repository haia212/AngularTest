// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/colloc/detail',
], function($, _, Backbone, HomeView, CollocDetailView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'colloc/:id': 'showColloc',

      // Default
      '*actions': 'defaultAction',
      '': 'defaultAction'
    }
  });

  var initialize = function(){

    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
      options.url = 'http://localhost:3000/api' + options.url;
    });

    var app_router = new AppRouter;


    // 'views/colloc/:id'
    app_router.on('route:showColloc', function(id){
      var collocDetailView = new CollocDetailView();
      collocDetailView.render(id);
    });


    // We have no matching route, lets just log what the URL was
    app_router.on('route:defaultAction', function(actions){
      var homeView = new HomeView();
      homeView.render();
    });


    // Start browser history
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
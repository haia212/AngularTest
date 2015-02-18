// Filename: views/colloc/detail
define([
  'jquery',
  'underscore',
  'backbone',

  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!template/home.html'
], function($, _, Backbone, homeTemplate){
  var HomeView = Backbone.View.extend({
    el: $('main'),
    render: function(){

          // Append our compiled template to this Views "el"
          this.$el.append( _.template( homeTemplate ));

    }
  });
  // Our module now returns our view
  return HomeView;
});
// Filename: views/colloc/detail
define([
  'jquery',
  'underscore',
  'backbone',

  'models/colloc/collocModel',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!template/colloc/detail.html'
], function($, _, Backbone, collocModel, collocDetailTemplate){
  var CollocDetailView = Backbone.View.extend({
    el: $('main'),
    render: function(colloc_id){
      var $bb = this;

      var colloc = new collocModel({id : colloc_id});
      colloc.fetch({
        success : function(colloc) {
          console.log(colloc);

          var data = {
            colloc: colloc,
            _: _ 
          };

          // Using Underscore we can compile our template with data
          var compiledTemplate = _.template( collocDetailTemplate, data );
          // Append our compiled template to this Views "el"
          $bb.$el.append( compiledTemplate );

        }
      });

    }
  });
  // Our module now returns our view
  return CollocDetailView;
});
// Filename: models/colloc
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var CollocModel = Backbone.Model.extend({
    urlRoot: '/colloc',
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return CollocModel;
});
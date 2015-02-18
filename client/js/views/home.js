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
    constructor: function (options) {
        this.router = options.router;
        Backbone.View.prototype.constructor.call(this);
    },
    events: {
        'submit form': 'login',
    },
    login: function() {
      this.router.navigate('colloc/54e1edb4bceb39ad3efb4075', true);
    },
    render: function(){
      console.log(Backbone);

          // Append our compiled template to this Views "el"
          this.$el.html( _.template( homeTemplate ));

    }
  });
  // Our module now returns our view
  return HomeView;
});
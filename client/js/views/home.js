// Filename: views/colloc/detail
define([
  'jquery',
  'underscore',
  'backbone',
  'serializer',

  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!template/home.html'
], function($, _, Backbone, serializer, homeTemplate){
  var HomeView = Backbone.View.extend({
    el: $('main'),
    constructor: function (options) {
        this.session = options.session;
        this.router = options.router;
        Backbone.View.prototype.constructor.call(this);
    },
    events: {
        'submit form': 'login',
    },
    login: function(ev) {
      ev.preventDefault();
      console.log($(ev.currentTarget).serializeObject());
      this.session.login($(ev.currentTarget).serializeObject(), 'colloc/54e5e14b96bf48ad8f0231b6');

//      this.router.navigate('colloc/54e1edb4bceb39ad3efb4075', true);
    },
    render: function(){

          // Append our compiled template to this Views "el"
          this.$el.html( _.template( homeTemplate ));

    }
  });
  // Our module now returns our view
  return HomeView;
});
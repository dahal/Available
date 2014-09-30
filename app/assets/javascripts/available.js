window.Available = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Available.Routers.Domains()
    Backbone.history.start()
  }
};

window.App = window.Available

$(document).ready(function(){
  App.initialize();
});

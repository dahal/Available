window.Available = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  Available.initialize();
});

App.Models.Domain = Backbone.Model.extend({});

// All domains
var all_domains = new App.Models.Domain
all_domains.url = '/domains/all_domains'
all_domains.fetch({
  success: function(){
    _.map((all_domains.attributes), function(domain){console.log(domain.name)})
  }
})

//three_letter_domains
var three_letter_domains = new App.Models.Domain
three_letter_domains.url = '/domains/three_letter_domains'
three_letter_domains.fetch({
  success: function(){
    _.map((three_letter_domains.attributes), function(domain){console.log(domain.name)})
  }
})

// four_letter_domains
var four_letter_domains = new App.Models.Domain
four_letter_domains.url = '/domains/four_letter_domains'
four_letter_domains.fetch({
  success: function(){
    _.map((four_letter_domains.attributes), function(domain){console.log(domain.name)})
  }
})
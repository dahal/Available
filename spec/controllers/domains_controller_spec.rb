require 'rails_helper'

describe DomainsController do
  before(:each) do
    Domain.delete_all
  end
  context "#index" do
    it "description" do
      expect(get :index).to render_template(layout: "application")    
    end
  end

  context "#all_domains" do
    let!(:sample_domains) { 200.times { Domain.create(name: ("a".."z").to_a.sample(3).join()+'.academy') } }.first(100)
    it "Should list 100 ramdom lists of domains" do
      get :all_domains
      json = JSON.parse(response.body)
      expect(json.count).to eq(100)
    end
  end

  context "#three_letter_domains" do
    let!(:awesome_domains) { 100.times { Domain.create(name: ("a".."z").to_a.sample(3).join()+'.academy') } }
    it "Should list available three_letter_domain names" do
      get :three_letter_domains
      domain_length = JSON.parse(response.body).first["name"].split('.').first.length
      expect(domain_length).to eq(3) 
    end
  end

  context "#four_letter_domains" do
    let!(:awesome_domains) { 100.times { Domain.create(name: ("a".."z").to_a.sample(4).join()+'.academy') } }
    it "Should list available four_letter_domain names" do
      get :four_letter_domains
      domain_length = JSON.parse(response.body).first["name"].split('.').first.length
      expect(domain_length).to eq(4) 
    end
  end

  context '#starts_with_letter' do
    let!(:awesome_domain) {Domain.create(name: 'asdfjkl.academy')}
    it "Should return the domains starting with the letter provided" do
      starting_letter = awesome_domain.name.split("").first
      get :starts_with_letter, letter: starting_letter
      expect(response.status).to eq(200)
      expect(starting_letter).to eq('a')
    end
  end

  context '#ends_with_tld' do
    words = %w(fadf lkllk fads tfdgs bsfd)
    let!(:awesome_domains) { words.map{|w| Domain.create(name: w+ '.agency')}}
    it "Should return domains starting ending on given tld" do
      ending_tld = awesome_domains.first.name.split('.').last
      get :ends_with_tld, tld: ending_tld
      expect(response.status).to be(200)
      expect(ending_tld).to eq('agency')
      
    end
  end
end
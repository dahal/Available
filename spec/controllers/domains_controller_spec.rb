require 'rails_helper'

describe DomainsController do
  before(:each) do
    Domain.delete_all
  end
  context "index" do
    let!(:sample_domains) { 100.times { Domain.create(name: ("a".."z").to_a.sample(3).join()+'.academy') } } 
    it "Should list 100 ramdom lists of domains" do
      get :index
      expect(response).to be_success
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
end
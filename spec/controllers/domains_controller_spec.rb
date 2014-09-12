require 'rails_helper'

describe DomainsController do
  let!(:sample_domains) { 100.times { Domain.create(name: ("a".."z").to_a.sample(3).join()+'.academy') } } 
  context "index" do
    it "Should list 100 ramdom lists of domains" do
      get :index
      expect(response).to  be_success
      json = JSON.parse(response.body)
      expect(json.count).to eq(100)
    end
  end
end
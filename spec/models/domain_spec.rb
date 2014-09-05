require 'rails_helper'
require 'pry'
describe Domain do
  let(:domain) {FactoryGirl.create(:domain)}
  context "#validation" do

    it "Should validate the presence of Domain#name" do
      # domain.should validate_presence_of(:name)
      expect(domain).to validate_presence_of(:name)
    end 

    it "Should validate the uniqueness of Domain#name" do
      expect(domain).to validate_uniqueness_of(:name)
    end

  end
end

require 'rails_helper'
describe Domain do
	before(:each) do 
		Domain.delete_all
	end
  context "#validation" do
    let(:valid_domain) { Domain.create(name: "purudahal.com") }
    let(:invalid_domain) { Domain.create(name: "google.com") }
    	it "should create a new domain if it is available" do 
    		expect { valid_domain }.to change { Domain.count }.by(1)
    	end
    	it "should not create a new domain if it is unavailable" do 
    		expect { invalid_domain }.to change { Domain.count }.by(0)
    	end
  end
end
class DomainsController < ApplicationController

  def index
    @domains = Domain.all.first(100)
    render json: @domains.to_json
  end
  
end

class DomainsController < ApplicationController

  def index
    @domains = Domain.all.first(100)
    render json: @domains.to_json
  end

  def three_letter_domains
    @domains = Domain.all.select {|domain| domain.name.split('.')[0].length == 3 }
    render json: @domains.to_json
  end

  def four_letter_domains
    @domains = Domain.all.select { |domain| domain.name.split('.')[0].length == 4 }
    render json: @domains.to_json
  end

end

class DomainsController < ApplicationController

  def index
    render layout: true  
  end

  def all_domains
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

  def letter
    p "*" * 30
    p params
    @domains = Domain.all.select{|domain| domain.name.split('').first == params[:letter]}
    render json: @domains.to_json
  end

  def ends_with_tld
    @domains = Domain.all.select {|domain| domain.name.split('.')[1] == params[:tld] }
    render json: @domains.to_json   
  end

end

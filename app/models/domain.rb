class Domain
	include MongoMapper::Document
	before_create :check_availability

	private
	def check_availability
		name = self.name
		Whois.whois(name).available?
	end

  
end



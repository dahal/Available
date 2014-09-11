class Domain
	include MongoMapper::Document
	before_create :check_availability

	private
	def check_availability
		name = self.name
		begin
			Whois.whois(name).available? == true ? true : false
		rescue
			false
		end
	end  
end
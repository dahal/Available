class Domain
	include MongoMapper::Document
	validates :name, uniqueness: true
end
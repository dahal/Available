require "json"

class Domainify

  def initialize
    @json_words = Hash.new()
    @array_of_words = Array.new()
  end

  def jsonify
    letters = ("a".."z").to_a
    words_hash = Hash[letters.map {|x| [x.to_s, Array.new]}]
    
    File.foreach(@file)  do |line|
      word = line.chomp.downcase
      words_hash[word[0]] << word if word.length >= 2 && word.length <= 4
      words_hash[word[0]].uniq!
    end

  end

end

words = Domainify.new
words.jsonify

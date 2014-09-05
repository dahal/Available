require "json"


class Domainify

  def initialize
    @file = 'words.csv'
    @json_words = Hash.new()
    @array_of_words = Array.new()
  end

  def jsonify
    letters = ("a".."z").to_a
    words_hash = Hash[letters.map {|x| [x.to_s, Array.new]}]

    ` if [ ! -f words.csv ]; then
    cat /usr/share/dict/words | tee words.csv
    fi `
    
    File.foreach(@file)  do |line|
      word = line.chomp.downcase
      words_hash[word[0]] << word if word.length >= 2
    end

    File.open("words.json","w").write(words_hash)    
  end

end

words = Domainify.new
words.jsonify

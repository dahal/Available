
three_letter_domains = []
four_letter_domains = []

File.foreach('./db/tlds.csv') do |tld|
  File.foreach('./db/three_letter_words.csv')  do |word|
    three_letter_domains << (word.chomp + tld.chomp).strip
  end
end


File.foreach('./db/tlds.csv') do |tld|
  File.foreach('./db/four_letter_words.csv')  do |word|
    four_letter_domains << (word.chomp + tld.chomp).strip
  end
end

three_letter_domains.each do |domain|
  Domain.create(name: domain)
  puts domain
end

four_letter_domains.each do |domain|
  Domain.create(name: domain)
  puts domain
end

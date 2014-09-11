
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

three_letter_domains.sample(100).each do |domain|
  begin
    if Whois.whois(domain).available?
      Domain.create(name: domain)
      puts domain
    end
  rescue StandardError => e
    p 'cannot save'
  rescue Whois::Error => e
    p 'cannot save'
  end
end

four_letter_domains.sample(100).each do |domain|
  begin
    if Whois.whois(domain).available?
      Domain.create(name: domain)
      puts domain
    end
  rescue StandardError => e
    p 'cannot save'
  rescue Whois::Error => e
    p 'cannot save'
  end
end

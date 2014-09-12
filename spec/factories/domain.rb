FactoryGirl.define do
  factory :domain do
    name ("a".."z").to_a.sample(3).join()+'.academy'
  end
end
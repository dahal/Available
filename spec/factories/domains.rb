# Read about factories at https://github.com/thoughtbot/factory_girl
require 'faker'
FactoryGirl.define do
  factory :domain do
    name {Faker::Lorem.word}
  end
end

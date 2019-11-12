# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'testuser@aa.io', first_name: 'Test', last_name: 'User', username: 'testuser', gender: 'unspecified', birthday: 'unspecified', password: 'password')


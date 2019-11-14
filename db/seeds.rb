# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create(email: 'testuser@aa.io', first_name: 'Test', last_name: 'User', username: 'testuser', gender: 'unspecified', birthday: 'unspecified', password: 'password')
User.create(email: 'pvd@aa.io', first_name: 'Matthias', last_name: 'Paul', username: 'pvd', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
User.create(email: 'yzerman@aa.io', first_name: 'Steve', last_name: 'Yzerman', username: 'yzerman', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
User.create(email: 'gus.a@aa.io', first_name: 'Gus', last_name: 'Alexander', username: 'gusa', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
User.create(email: 'akhmatova@aa.io', first_name: 'Anna', last_name: 'Gorenko', username: 'akhmatova', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
User.create(email: 'mayakovsky@aa.io', first_name: 'Vladimir', last_name: 'Mayakovsky', username: 'mayakovsky', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')

post1 = Post.new(user_id: 1, caption: "")
file1 = open("awslink")
post1.photo.attach(io: file1, filename: ".jpg")
post1.save

post2 = Post.new(user_id: 1, caption: "")
file2 = open("awslink")
post2.photo.attach(io: file2, filename: ".jpg")
post2.save

post3 = Post.new(user_id: 1)
file3 = open("awslink")
post3.photo.attach(io: file3, filename: ".jpg")
post3.save

post4 = Post.new(user_id: 1, caption: "")
file4 = open("awslink")
post4.photo.attach(io: file4, filename: ".jpg")
post4.save

post5 = Post.new(user_id: 1)
file5 = open("awslink")
post5.photo.attach(io: file5, filename: ".jpg")
post5.save

post6 = Post.new(user_id: 1)
file6 = open("awslink")
post6.photo.attach(io: file6, filename: ".jpg")
post6.save

post7 = Post.new(user_id: 2, caption: "")
file7 = open("awslink")
post7.photo.attach(io: file7, filename: ".jpg")
post7.save

post8 = Post.new(user_id: 2, caption: "")
file8 = open("awslink")
post8.photo.attach(io: file8, filename: ".jpg")
post8.save

post9 = Post.new(user_id: 2)
file9 = open("awslink")
post9.photo.attach(io: file9, filename: ".jpg")
post9.save

post10 = Post.new(user_id: 2)
file10 = open("awslink")
post10.photo.attach(io: file10, filename: ".jpg")
post10.save

post11 = Post.new(user_id: 2, caption: "")
file11 = open("awslink")
post11.photo.attach(io: file11, filename: ".jpg")
post11.save

post12 = Post.new(user_id: 3)
file12 = open("awslink")
post12.photo.attach(io: file12, filename: ".jpg")
post12.save

post13 = Post.new(user_id: 3, caption: "")
file13 = open("awslink")
post13.photo.attach(io: file13, filename: ".jpg")
post13.save

post14 = Post.new(user_id: 3)
file14 = open("awslink")
post14.photo.attach(io: file14, filename: ".jpg")
post14.save

post15 = Post.new(user_id: 3, caption: "")
file15 = open("awslink")
post15.photo.attach(io: file15, filename: ".jpg")
post15.save

post16 = Post.new(user_id: 4, caption: "")
file16 = open("awslink")
post16.photo.attach(io: file16, filename: ".jpg")
post16.save

post17 = Post.new(user_id: 4)
file17 = open("awslink")
post17.photo.attach(io: file17, filename: ".jpg")
post17.save

post18 = Post.new(user_id: 4)
file18 = open("awslink")
post18.photo.attach(io: file18, filename: ".jpg")
post18.save

post19 = Post.new(user_id: 5)
file19 = open("awslink")
post19.photo.attach(io: file19, filename: ".jpg")
post19.save

post20 = Post.new(user_id: 5, caption: "")
file20 = open("awslink")
post20.photo.attach(io: file20, filename: ".jpg")
post20.save

post21 = Post.new(user_id: 5)
file21 = open("awslink")
post21.photo.attach(io: file21, filename: ".jpg")
post21.save

post22 = Post.new(user_id: 4)
file22 = open("awslink")
post22.photo.attach(io: file22, filename: ".jpg")
post22.save

post23 = Post.new(user_id: 4, caption: "")
file23 = open("awslink")
post23.photo.attach(io: file23, filename: ".jpg")
post23.save

post24 = Post.new(user_id: 4)
file24 = open("awslink")
post24.photo.attach(io: file24, filename: ".jpg")
post24.save

post25 = Post.new(user_id: 4)
file25 = open("awslink")
post25.photo.attach(io: file25, filename: ".jpg")
post25.save

post26 = Post.new(user_id: 4)
file26 = open("awslink")
post26.photo.attach(io: file26, filename: ".jpg")
post26.save

post27 = Post.new(user_id: 4)
file27 = open("awslink")
post27.photo.attach(io: file27, filename: ".jpg")
post27.save


Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )
Comment.create(body: "", post_id: , user_id: )



Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')
Like.create(user_id: , likeable_id: , likeable_type: 'Post')



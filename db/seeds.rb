# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

user1 = User.new(email: 'testuser@aa.io', first_name: 'Test', last_name: 'User', username: 'testuser', gender: 'unspecified', birthday: 'unspecified', password: 'password')
profilepic1 = open("awslink")
user1.photo.attach(io: profilepic1, filename: "")
user1.save

user2 = User.new(email: 'pvd@aa.io', first_name: 'Matthias', last_name: 'Paul', username: 'pvd', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
profilepic2 = open("awslink")
user2.photo.attach(io: profilepic2, filename: "pvdcurrent.jpg")
user2.save

user3 = User.new(email: 'mayakovsky@aa.io', first_name: 'Vladimir', last_name: 'Mayakovsky', username: 'mayakovsky', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
profilepic3 = open("awslink")
user3.photo.attach(io: profilepic3, filename: "vladimirmayakovsky.jpg")
user3.save

user4 = User.new(email: 'akhmatova@aa.io', first_name: 'Anna', last_name: 'Gorenko', username: 'akhmatova', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
profilepic4 = open("awslink")
user4.photo.attach(io: profilepic4, filename: "Anna-Akhmatova.jpg")
user4.save

# User.create(email: 'yzerman@aa.io', first_name: 'Steve', last_name: 'Yzerman', username: 'yzerman', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
User.create(email: 'gus.a@aa.io', first_name: 'Gus', last_name: 'Alexander', username: 'gusa', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')

post1 = Post.new(user_id: 1, caption: "They fixed the bridge in Vorontsovsky!")
file1 = open("awslink")
post1.photo.attach(io: file1, filename: "vorontsovsky2.jpg")
post1.save

post2 = Post.new(user_id: 1, caption: "Beast")
file2 = open("awslink")
post2.photo.attach(io: file2, filename: "tretiak.jpg")
post2.save

post3 = Post.new(user_id: 1)
file3 = open("awslink")
post3.photo.attach(io: file3, filename: "msk.jpg")
post3.save

post4 = Post.new(user_id: 1, caption: "Great movie")
file4 = open("awslink")
post4.photo.attach(io: file4, filename: "9dayspost.jpg")
post4.save

post5 = Post.new(user_id: 1, caption: "Classic!")
file5 = open("awslink")
post5.photo.attach(io: file5, filename: "diamond_arm.jpg")
post5.save

post6 = Post.new(user_id: 1)
file6 = open("awslink")
post6.photo.attach(io: file6, filename: "larionov.jpg")
post6.save

post7 = Post.new(user_id: 1, caption: "Nothing better")
file7 = open("awslink")
post7.photo.attach(io: file7, filename: "moscowwinter.jpg")
post7.save

post8 = Post.new(user_id: 2, caption: "A must.")
file8 = open("awslink")
post8.photo.attach(io: file8, filename: "pvdcoffee.jpg")
post8.save

post9 = Post.new(user_id: 2)
file9 = open("awslink")
post9.photo.attach(io: file9, filename: "PVD.jpg")
post9.save

post10 = Post.new(user_id: 2)
file10 = open("awslink")
post10.photo.attach(io: file10, filename: "paulvandyk_dreamstate.jpg")
post10.save

post11 = Post.new(user_id: 2, caption: "Some classics")
file11 = open("awslink")
post11.photo.attach(io: file11, filename: "7ways.jpg")
post11.save

post12 = Post.new(user_id: 2)
file12 = open("awslink")
post12.photo.attach(io: file12, filename: "paul_van_dyk.jpg")
post12.save

post13 = Post.new(user_id: 3, caption: "Portrait of me")
file13 = open("awslink")
post13.photo.attach(io: file13, filename: "mayakovsky.jpg")
post13.save

post14 = Post.new(user_id: 3)
file14 = open("awslink")
post14.photo.attach(io: file14, filename: "toesenin.jpg")
post14.save

post15 = Post.new(user_id: 3, caption: "Check out my work!")
file15 = open("awslink")
post15.photo.attach(io: file15, filename: "futurist.jpg")
post15.save

post16 = Post.new(user_id: 3, caption: "Very interesting convo we had...")
file16 = open("awslink")
post16.photo.attach(io: file16, filename: "mayakovsky2.jpg")
post16.save

post17 = Post.new(user_id: 4)
file17 = open("awslink")
post17.photo.attach(io: file17, filename: "akhmatova2.jpg")
post17.save

post18 = Post.new(user_id: 4)
file18 = open("awslink")
post18.photo.attach(io: file18, filename: "9days1year.jpg")
post18.save

post19 = Post.new(user_id: 4)
file19 = open("awslink")
post19.photo.attach(io: file19, filename: "golden_kupol_33.jpg") ## ATTRIBUTE IN CAPTION
post19.save

post20 = Post.new(user_id: 4, caption: "Ready to eat these every day 🍽")
file20 = open("awslink")
post20.photo.attach(io: file20, filename: "pels.jpg")
post20.save

post21 = Post.new(user_id: 4)
file21 = open("awslink")
post21.photo.attach(io: file21, filename: "vorontsovsky.jpg")
post21.save

post22 = Post.new(user_id: 1, caption: "One of the greatest of all time")
file22 = open("awslink")
post22.photo.attach(io: file22, filename: "Yury_nikulin.jpg")
post22.save

post23 = Post.new(user_id: 1, caption: "Snowfall tonight!")
file23 = open("awslink")
post23.photo.attach(io: file23, filename: "wintermoscow.jpg")
post23.save

post24 = Post.new(user_id: 2)
file24 = open("awslink")
post24.photo.attach(io: file24, filename: "reflections.jpg")
post24.save

post25 = Post.new(user_id: 4, caption: "the CAPTAIN")
file25 = open("awslink")
post25.photo.attach(io: file25, filename: "yzerman.jpg")
post25.save

post26 = Post.new(user_id: 2)
file26 = open("awslink")
post26.photo.attach(io: file26, filename: "saunderson.jpg")
post26.save



Comment.create(body: "Glad to hear", post_id: 1, user_id: 4)
Comment.create(body: "Gorgeous!", post_id: 1, user_id: 3)
Comment.create(body: "Love this place", post_id: 1, user_id: 2)
Comment.create(body: "So good", post_id: 2, user_id: 4)
Comment.create(body: "A legend", post_id: 2, user_id: 3)
Comment.create(body: "LEGEND", post_id: 2, user_id: 3)
Comment.create(body: "Лучшйи город земли", post_id: 3, user_id: 3)
Comment.create(body: "Love this", post_id: 3, user_id: 2)
Comment.create(body: "What a city.", post_id: 3, user_id: 4)
Comment.create(body: "You're telling me!", post_id: 3, user_id: 1)
Comment.create(body: "One of my favs", post_id: 4, user_id: 2)
Comment.create(body: "This is great", post_id: 7, user_id: 2)
Comment.create(body: "I know!", post_id: 7, user_id: 1)
Comment.create(body: "Never enough!", post_id: 8, user_id: 1)
Comment.create(body: "Great photo", post_id: 9, user_id: 1)
Comment.create(body: "Огонь 🔥🔥", post_id: 9, user_id: 4)
Comment.create(body: "I'll be at the show tonight!", post_id: 12, user_id: 1)
Comment.create(body: "Огонь 🔥🔥", post_id: 12, user_id: 3)
Comment.create(body: "How have you been?", post_id: 12, user_id: 4)
Comment.create(body: "One of my favorite places to play", post_id: 23, user_id: 2)
Comment.create(body: "Man things have changed", post_id: 23, user_id: 3)
Comment.create(body: "Great stuff", post_id: 23, user_id: 4)
Comment.create(body: "I COULD EAT THESE ALL DAY", post_id: 20, user_id: 3)
Comment.create(body: "Looks so good", post_id: 20, user_id: 1)
Comment.create(body: "the maaaan", post_id: 25, user_id: 1)
Comment.create(body: "Jaaa", post_id: 25, user_id: 2)
Comment.create(body: "cool", post_id: 25, user_id: 3)



Like.create(user_id:1 , likeable_id: 1, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 1, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 24, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 24, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 22, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 22, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 2, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 2, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 4, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 4, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 20, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 20, likeable_type: 'Post')
Like.create(user_id:4 , likeable_id: 6, likeable_type: 'Post')
Like.create(user_id:4 , likeable_id: 6, likeable_type: 'Post')
Like.create(user_id:4 , likeable_id: 18, likeable_type: 'Post')
Like.create(user_id:4 , likeable_id: 18, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 8, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 8, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 16, likeable_type: 'Post')
Like.create(user_id:3 , likeable_id: 16, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 10, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 10, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 23, likeable_type: 'Post')
Like.create(user_id:2 , likeable_id: 23, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 23, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 23, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 23, likeable_type: 'Post')
Like.create(user_id:1 , likeable_id: 8, likeable_type: 'Post')



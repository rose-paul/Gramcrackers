# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

user1 = User.new(email: 'gus.a@aa.io', first_name: 'Gus', last_name: 'Alexander', username: 'gusa', gender: 'unspecified', 
    birthday: 'unspecified', password: 'password', display_name: "Nadezhda", bio: "This site makes me want s'mores!")
profilepic1 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus2.jpg")
user1.photo.attach(io: profilepic1, filename: "gus2.jpg")
user1.save!

user2 = User.new(email: 'pvd@aa.io', first_name: 'Matthias', last_name: 'Paul', username: 'pvd', gender: 'unspecified', 
    birthday: 'unspecified', password: 'thepassword', display_name: "PvD", bio: "Unofficial Paul van Dyk Gramcrackers Page
    📍 Berlin ")
profilepic2 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/pvdcurrent.jpg")
user2.photo.attach(io: profilepic2, filename: "pvdcurrent.jpg")
user2.save!

user3 = User.new(email: 'mayakovsky@aa.io', first_name: 'Vladimir', last_name: 'Mayakovsky', username: 'mayakovsky', gender: 'unspecified', 
    birthday: 'unspecified', password: 'thepassword', display_name: 'Volodya', bio: "Теперь поговорим о дряни.")
profilepic3 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/mayakovsky/vladimirmayakovsky.jpg")
user3.photo.attach(io: profilepic3, filename: "vladimirmayakovsky.jpg")
user3.save!

user4 = User.new(email: 'akhmatova@aa.io', first_name: 'Anna', last_name: 'Gorenko', username: 'akhmatova', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword',
    display_name: "Akhmatova", bio: "У меня сегодня много дела.")
profilepic4 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/Anna-Akhmatova.jpg")
user4.photo.attach(io: profilepic4, filename: "Anna-Akhmatova.jpg")
user4.save!

user5 = User.new(email: 'datsyuk@aa.io', first_name: 'Pavel', last_name: 'Datsyuk', username: 'datsyuk', gender: 'unspecified', birthday: 'unspecified', password: 'thepassword')
profilepic5 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/yzerman/datsyuk.jpg")
user5.photo.attach(io: profilepic4, filename: "datsyuk.jpg")
user5.save!

user6 = User.new(email: 'carmela@aa.io', first_name: 'Carmela', last_name: 'Soprano', username: 'c.soprano', gender: 'unspecified', 
    birthday: 'unspecified', password: 'thepassword', display_name: 'Carmela', bio: 'Tony!!!')
user6.save!

user7 = User.new(email: 'saunderson@aa.io', first_name: 'Kevin', last_name: 'Saunderson', username: 'k.saunderson', gender: 'unspecified', 
    birthday: 'unspecified', password: 'thepassword', display_name: "Kevin", bio: "Detroit based")
profilepic7 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/saunderson.jpg")
user7.photo.attach(io: profilepic7, filename: "saunderson.jpg")
user7.save!


post1 = Post.new(user_id: 1, caption: "They fixed the bridge in Vorontsovsky!")
file1 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/vorontsovsky2.jpg")
post1.photo.attach(io: file1, filename: "vorontsovsky2.jpg")
post1.save!

post2 = Post.new(user_id: 1, caption: "Beast")
file2 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/tretiak.jpg")
post2.photo.attach(io: file2, filename: "tretiak.jpg")
post2.save!

post3 = Post.new(user_id: 1)
file3 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/msk.jpg")
post3.photo.attach(io: file3, filename: "msk.jpg")
post3.save!

post4 = Post.new(user_id: 1, caption: "Great movie")
file4 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/9dayspost.jpg")
post4.photo.attach(io: file4, filename: "9dayspost.jpg")
post4.save!

post5 = Post.new(user_id: 1, caption: "Classic!")
file5 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/diamond_arm.jpg")
post5.photo.attach(io: file5, filename: "diamond_arm.jpg")
post5.save!

post6 = Post.new(user_id: 1)
file6 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/larionov.jpg")
post6.photo.attach(io: file6, filename: "larionov.jpg")
post6.save!

post7 = Post.new(user_id: 1, caption: "Nothing better")
file7 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/moscowwinter.jpg")
post7.photo.attach(io: file7, filename: "moscowwinter.jpg")
post7.save!

post8 = Post.new(user_id: 2, caption: "A must.")
file8 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/pvdcoffee.jpg")
post8.photo.attach(io: file8, filename: "pvdcoffee.jpg")
post8.save!

post9 = Post.new(user_id: 2)
file9 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/PVD.jpg")
post9.photo.attach(io: file9, filename: "PVD.jpg")
post9.save!

post10 = Post.new(user_id: 2)
file10 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/paulvandyk_dreamstate.jpg")
post10.photo.attach(io: file10, filename: "paulvandyk_dreamstate.jpg")
post10.save!

post11 = Post.new(user_id: 2, caption: "Some classics")
file11 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/7ways.jpg")
post11.photo.attach(io: file11, filename: "7ways.jpg")
post11.save!

post12 = Post.new(user_id: 2)
file12 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/paul_van_dyk.jpg")
post12.photo.attach(io: file12, filename: "paul_van_dyk.jpg")
post12.save!

post13 = Post.new(user_id: 3, caption: "Portrait of me")
file13 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/mayakovsky/mayakovsky.jpg")
post13.photo.attach(io: file13, filename: "mayakovsky.jpg")
post13.save!

post14 = Post.new(user_id: 3)
file14 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/mayakovsky/toesenin.jpg")
post14.photo.attach(io: file14, filename: "toesenin.jpg")
post14.save!

post15 = Post.new(user_id: 3, caption: "Check out my work!")
file15 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/mayakovsky/futurist.jpg")
post15.photo.attach(io: file15, filename: "futurist.jpg")
post15.save!

post16 = Post.new(user_id: 3, caption: "Very interesting convo we had...")
file16 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/mayakovsky/mayakovsky2.jpg")
post16.photo.attach(io: file16, filename: "mayakovsky2.jpg")
post16.save!

post17 = Post.new(user_id: 4)
file17 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/akhmatova2.jpg")
post17.photo.attach(io: file17, filename: "akhmatova2.jpg")
post17.save!

post18 = Post.new(user_id: 4)
file18 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/9days1year.jpg")
post18.photo.attach(io: file18, filename: "9days1year.jpg")
post18.save!

post19 = Post.new(user_id: 4, caption: "By Elena Chernyshova")
file19 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/golden_kupol_33.jpg")
post19.photo.attach(io: file19, filename: "golden_kupol_33.jpg") ## ATTRIBUTE IN CAPTION
post19.save!

post20 = Post.new(user_id: 4, caption: "Ready to eat these every day 🍽")
file20 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/pels.jpg")
post20.photo.attach(io: file20, filename: "pels.jpg")
post20.save!

post21 = Post.new(user_id: 4)
file21 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/vorontsovsky.jpg")
post21.photo.attach(io: file21, filename: "vorontsovsky.jpg")
post21.save!

post22 = Post.new(user_id: 1, caption: "One of the greatest of all time")
file22 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/Yury_nikulin.jpg")
post22.photo.attach(io: file22, filename: "Yury_nikulin.jpg")
post22.save!

post23 = Post.new(user_id: 1, caption: "Snowfall tonight!")
file23 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/gus/wintermoscow.jpg")
post23.photo.attach(io: file23, filename: "wintermoscow.jpg")
post23.save!

post24 = Post.new(user_id: 2)
file24 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/reflections.jpg")
post24.photo.attach(io: file24, filename: "reflections.jpg")
post24.save!

post25 = Post.new(user_id: 4, caption: "the CAPTAIN")
file25 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/akhmatova/yzerman.jpg")
post25.photo.attach(io: file25, filename: "yzerman.jpg")
post25.save!

post26 = Post.new(user_id: 2)
file26 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/pvd/saunderson.jpg")
post26.photo.attach(io: file26, filename: "saunderson.jpg")
post26.save!

post27 = Post.new(user_id: 6)
file27 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/carmela/sopranofamily.jpg")
post27.photo.attach(io: file27, filename: "sopranofamily.jpg")
post27.save!

post27 = Post.new(user_id: 6)
file27 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/carmela/tony.jpg")
post27.photo.attach(io: file27, filename: "tony.jpg")
post27.save!

post28 = Post.new(user_id: 7)
file28 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/saunderson/saundersong.jpg")
post28.photo.attach(io: file28, filename: "saundersong.jpg")
post28.save!

post29 = Post.new(user_id: 7)
file29 = open("awslink")
post29.photo.attach(io: file29, filename: "https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/saunderson/tresor_linter.jpg")
post29.save!

post30 = Post.new(user_id: 7)
file30 = open("https://gramcrackers-seeds.s3-us-west-1.amazonaws.com/saunderson/performance.jpg")
post30.photo.attach(io: file30, filename: "performance.jpg")
post30.save!



Comment.create!(body: "Glad to hear", post_id: 1, user_id: 4)
Comment.create!(body: "Gorgeous!", post_id: 1, user_id: 3)
Comment.create!(body: "Love this place", post_id: 1, user_id: 2)
Comment.create!(body: "So good", post_id: 2, user_id: 4)
Comment.create!(body: "A legend", post_id: 2, user_id: 3)
Comment.create!(body: "LEGEND", post_id: 2, user_id: 3)
Comment.create!(body: "Лучшйи город земли", post_id: 3, user_id: 3)
Comment.create!(body: "Love this", post_id: 3, user_id: 2)
Comment.create!(body: "What a city.", post_id: 3, user_id: 4)
Comment.create!(body: "You're telling me!", post_id: 3, user_id: 1)
Comment.create!(body: "One of my favs", post_id: 4, user_id: 2)
Comment.create!(body: "This is great", post_id: 7, user_id: 2)
Comment.create!(body: "I know!", post_id: 7, user_id: 1)
Comment.create!(body: "Never enough!", post_id: 8, user_id: 1)
Comment.create!(body: "Great photo", post_id: 9, user_id: 1)
Comment.create!(body: "Огонь 🔥🔥", post_id: 9, user_id: 4)
Comment.create!(body: "I'll be at the show tonight!", post_id: 12, user_id: 1)
Comment.create!(body: "Огонь 🔥🔥", post_id: 12, user_id: 3)
Comment.create!(body: "How have you been?", post_id: 12, user_id: 4)
Comment.create!(body: "One of my favorite places to play", post_id: 23, user_id: 2)
Comment.create!(body: "Man things have changed", post_id: 23, user_id: 3)
Comment.create!(body: "Great stuff", post_id: 23, user_id: 4)
Comment.create!(body: "I COULD EAT THESE ALL DAY", post_id: 20, user_id: 3)
Comment.create!(body: "Looks so good", post_id: 20, user_id: 1)
Comment.create!(body: "the maaaan", post_id: 25, user_id: 1)
Comment.create!(body: "Jaaa", post_id: 25, user_id: 2)
Comment.create!(body: "cool", post_id: 25, user_id: 3)



Like.create!(user_id:1 , likeable_id: 1, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 1, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 24, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 24, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 22, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 22, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 2, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 2, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 4, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 4, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 20, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 20, likeable_type: 'Post')
Like.create!(user_id:4 , likeable_id: 6, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 6, likeable_type: 'Post')
Like.create!(user_id:4 , likeable_id: 18, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 18, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 8, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 8, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 16, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 16, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 10, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 10, likeable_type: 'Post')
Like.create!(user_id:4 , likeable_id: 23, likeable_type: 'Post')
Like.create!(user_id:2 , likeable_id: 23, likeable_type: 'Post')
Like.create!(user_id:1 , likeable_id: 23, likeable_type: 'Post')
Like.create!(user_id:3 , likeable_id: 23, likeable_type: 'Post')
Like.create!(user_id:5 , likeable_id: 1, likeable_type: 'Post')
Like.create!(user_id:5 , likeable_id: 4, likeable_type: 'Post')
Like.create!(user_id:5 , likeable_id: 3, likeable_type: 'Post')
Like.create!(user_id:5 , likeable_id: 2, likeable_type: 'Post')
Like.create!(user_id:6 , likeable_id: 6, likeable_type: 'Post')
Like.create!(user_id:6 , likeable_id: 22, likeable_type: 'Post')
Like.create!(user_id:6 , likeable_id: 23, likeable_type: 'Post')
Like.create!(user_id:6 , likeable_id: 14, likeable_type: 'Post')



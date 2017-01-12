# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User data
user1 = User.create("email":"guest@gmail.com","password":"password","username":"guest",name:"Guest Demo");
user2 = User.create("email":"plee0@pbs.org","password":"Cu6JV0yo","username":"plee0","name":"Pamela Lee");
user3 = User.create("email":"aryan1@miitbeian.gov.cn","password":"vuLN21","username":"aryan1","name":"Ann Ryan");
user4 = User.create("email":"slawson2@chronoengine.com","password":"K7k80DV","username":"slawson2","name":"Sara Lawson");
user5 = User.create("email":"vgarrett3@arizona.edu","password":"qBpaNbyNHgbV","username":"vgarrett3","name":"Virginia Garrett");
user6 = User.create("email":"bgilbert4@imgur.com","password":"vxJvPr1","username":"bgilbert4","name":"Benjamin Gilbert");
user7 = User.create("email":"kcooper5@soup.io","password":"X2LcTjHLlXuV","username":"kcooper5","name":"Karen Cooper");
user8 = User.create("email":"ehall6@cornell.edu","password":"JnG3jfHlA5nf","username":"ehall6","name":"Earl Hall");
user9 = User.create("email":"areed7@networksolutions.com","password":"3wua98N","username":"areed7","name":"Albert Reed");
user10 = User.create("email":"arose8@toplist.cz","password":"5WvYoKwifA","username":"arose8","name":"Annie Rose");
user11 = User.create("email":"nkelley9@home.pl","password":"YfvuKrHV","username":"nkelley9","name":"Nicole Kelley");
user12 = User.create("email":"hgreena@1und1.de","password":"1JixJeAl0m","username":"hgreena","name":"Harold Green");
user13 = User.create("email":"jhayesb@cdbaby.com","password":"ojsykUoIXM","username":"jhayesb","name":"Joyce Hayes");
user14 = User.create("email":"jbaileyc@purevolume.com","password":"J7GDHBSe0Bn","username":"jbaileyc","name":"Jerry Bailey");
user15 = User.create("email":"elarsond@ted.com","password":"ebxwh01lAb3","username":"elarsond","name":"Eric Larson");
user16 = User.create("email":"jperrye@cnet.com","password":"xPwtEDPtg","username":"jperrye","name":"Jimmy Perry");
user17 = User.create("email":"jfoxf@so-net.ne.jp","password":"XyZXAopio64","username":"jfoxf","name":"Jeffrey Fox");
user18 = User.create("email":"rburtong@homestead.com","password":"z7022p5gw5","username":"rburtong","name":"Richard Burton");
user19 = User.create("email":"aperkinsh@studiopress.com","password":"EONxtK","username":"aperkinsh","name":"Amanda Perkins");
user20 = User.create("email":"ariverai@bbb.org","password":"RCyMudKdf","username":"ariverai","name":"Ann Rivera");
user21 = User.create("email":"wbennettj@barnesandnoble.com","password":"WJuYEYKo","username":"wbennettj","name":"Wayne Bennett");
user22 = User.create("email":"hmedinak@deviantart.com","password":"xCxdcp","username":"hmedinak","name":"Harry Medina");
user23 = User.create("email":"awilliamsonl@biglobe.ne.jp","password":"1QkuOzZEnk1e","username":"awilliamsonl","name":"Amy Williamson");
user24 = User.create("email":"chendersonm@slashdot.org","password":"svXZxKz","username":"chendersonm","name":"Christopher Henderson");

#city data
city1 = City.create(name: "San Francisco", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150504/hith-golden-gate-144833144-E_z5gl2t.jpg");
city2 = City.create(name: "Los Angeles", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150503/56-3636244-los-angeles-skyline-telephoto_kpcjc8.jpg");
city3 = City.create(name: "Seattle", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150504/609_view1_fwaaxo.jpg");
city4 = City.create(name: "New York", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150506/New-York-City-Skyline_j0xhgh.jpg");
city5 = City.create(name: "Boston", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150504/boston-photo1_yhewmg.jpg");
city6 = City.create(name: "Chicago", background_image_url: "http://res.cloudinary.com/dirtnmtpc/image/upload/v1484150503/timelapse-video-of-chicago-cloud-gate-or-bean-project-file-chicago-cloud-gatemove-1920x1080_ekww2w4p__S0000_bi7gkb.jpg");

#memberships data
# Membership.create(member_id: user1.id, city_id: city1.id)
Membership.create(member_id: user2.id, city_id: city2.id)
Membership.create(member_id: user3.id, city_id: city3.id)
Membership.create(member_id: user4.id, city_id: city4.id)
Membership.create(member_id: user5.id, city_id: city5.id)
Membership.create(member_id: user6.id, city_id: city6.id)
Membership.create(member_id: user7.id, city_id: city1.id)
Membership.create(member_id: user8.id, city_id: city2.id)
Membership.create(member_id: user9.id, city_id: city3.id)
Membership.create(member_id: user10.id, city_id: city4.id)
Membership.create(member_id: user11.id, city_id: city5.id)
Membership.create(member_id: user12.id, city_id: city6.id)
Membership.create(member_id: user13.id, city_id: city1.id)
Membership.create(member_id: user14.id, city_id: city2.id)
Membership.create(member_id: user15.id, city_id: city3.id)
Membership.create(member_id: user16.id, city_id: city4.id)
Membership.create(member_id: user17.id, city_id: city5.id)
Membership.create(member_id: user18.id, city_id: city6.id)
Membership.create(member_id: user19.id, city_id: city1.id)
Membership.create(member_id: user20.id, city_id: city2.id)
Membership.create(member_id: user21.id, city_id: city3.id)
Membership.create(member_id: user22.id, city_id: city4.id)
Membership.create(member_id: user23.id, city_id: city5.id)
Membership.create(member_id: user24.id, city_id: city6.id)

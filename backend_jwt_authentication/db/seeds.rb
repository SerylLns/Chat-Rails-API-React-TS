
s = User.first
t = User.last

Message.destroy_all
Chatroom.destroy_all


c = Chatroom.create(
  name: "Salon de test",
  user: s
)

c2 = Chatroom.create(
  name: "Salon de test 2",
  user: s
)

10.times do |time|
  Message.create(
    user: s,
    chatroom: c,
    content: "This file should contain all the record creation needed to seed the database with its default values."
  )

  Message.create(
    user: t,
    chatroom: c,
    content: "This file should contain all the record creation needed to seed the database with its default values."
  )


end
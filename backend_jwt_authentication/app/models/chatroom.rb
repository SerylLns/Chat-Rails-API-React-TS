class Chatroom < ApplicationRecord
  attr_accessor :user
  
  has_many :user_chatrooms, dependent: :destroy
  has_many :users, through: :user_chatrooms
  has_many :messages
  after_create :save_foreign_key


  private

  def save_foreign_key
    UserChatroom.create(chatroom: self, user: self.user)
  end
end
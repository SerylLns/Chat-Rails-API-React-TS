class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  validates :username, uniqueness: {case_sensitive: false}
  has_many :user_chatrooms
  has_many :chatrooms, through: :user_chatrooms
end

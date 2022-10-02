class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar

  def avatar
    object.avatar
  end
end

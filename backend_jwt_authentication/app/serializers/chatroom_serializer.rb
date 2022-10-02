class ChatroomSerializer < ActiveModel::Serializer
  attributes :id, :name, :messages

  def messages
    object.messages
  end

  def last_message
    messages.find(:last, :order => :created_at)
  end
end
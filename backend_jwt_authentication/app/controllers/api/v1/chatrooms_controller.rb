class Api::V1::ChatroomsController < ApplicationController


  def index
    @chatrooms = current_user.chatrooms
    render json: {chatrooms: @chatrooms }, status: :accepted
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    render json: {chatroom: ChatroomSerializer.new(@chatroom), messages: @chatroom.messages }, status: :accepted
  end
end

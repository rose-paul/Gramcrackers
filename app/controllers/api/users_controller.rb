class Api::UsersController < ApplicationController
  def index 
    if !params[:username].nil?
      @user = User.find_by(username: params[:username])
      render :show
    end
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show 
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show 
    @user = User.find(params[:id])
    render :show
  end

  private 
  def user_params
    params.require(:user).permit(:username, :email, :first_name, :last_name, :birthday, :gender, :password, :photo)
  end
end

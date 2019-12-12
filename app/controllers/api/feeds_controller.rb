class Api::FeedsController < ApplicationController
    def index 
        user_ids = []
        user_ids.concat(params[:user_ids]) if params[:user_ids]
        user_ids.push(current_user.id)
        @posts = Post.where(user_id: user_ids)
        render :index
    end

end

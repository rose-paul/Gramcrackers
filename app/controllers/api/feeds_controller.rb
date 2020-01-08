class Api::FeedsController < ApplicationController
    def index 
        user_ids = []
        user_ids.concat(params[:user_ids]) if params[:user_ids]
        user_ids.push(current_user.id)
        if !params[:margin]
            @posts = Post.where(user_id: user_ids).limit(5).reverse
            render :index
        else
            @posts = Post.where(user_id: user_ids).offset(params[:margin]).limit(5).reverse
        end
    end

end

class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index 
        @likes = Like.where(likeable_id: params[:post_id])
        render :index
    end

    def destroy 
        @like = Like.where(likeable_id: params[:post_id]).where(user_id: current_user.id) 
        @like = @like.first
        @like.destroy
        render :show
    end

    
    private
    def like_params
        params.require(:like).permit(:user_id, :likeable_id, :likeable_type)
    end

end

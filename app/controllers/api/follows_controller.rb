class Api::FollowsController < ApplicationController

    def index
        if params["type"] == 'followers'
            @follows = Follow.where(following_id: current_user.id)
            render :index
        elsif params["type"] == 'following'
            @follows = Follow.where(user_id: current_user.id)
            render :index 
        end
    end

    def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id
        if @follow.save
            render :show
        else
            render json: ["Following failed"]
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy 
        render :show
    end


    private

    def follow_params

        params.permit(:following_id)
    end
end

class Api::FollowsController < ApplicationController

    def index
        @followers = Follow.where(following_id: current_user.id)
        render :index
    end

    def create
    @follow = Follow.new(user_id: current_user.id)
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
        params.require(:follow).permit(:following_id)
    end
end

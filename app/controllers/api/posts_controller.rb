class Api::PostsController < ApplicationController
    def index
        user = User.find_by(username: params[:username])
        if user
            @posts = user.posts
            # Post.where('user_id = ?', user.id) ##.includes() pass in association
            render :index
        else
            render json: ["User not found"], status: 404
        end
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id 
        if @post.save 
            render :show ## ideally, it'll put the post on the feed. 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show 
        @post = Post.find(params[:id]) 
        render :show
    end
    
    def update 
        @post = current_user.posts.find(params[:id]) 
        if @post && @post.update(post_params) 
            render :show 
        else
            render json: @post.errors.full_messages, status: 401
        end
    end


    def destroy
        @post = current_user.posts.find(params[:id]) 
        @post.destroy 
        render :show
    end

    private 

    def post_params
        if params[:post][:photo] == "null"
            params[:post][:photo] = nil 
        end
        params.require(:post).permit(:caption, :photo)
    end


end

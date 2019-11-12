class Api::CommentsController < ApplicationController

    def index 
        @post = Post.find(params[:post_id])
        @comments = @post.comments
        render :index
    end

    def show 
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            render json: ["Comment not found"], status: 404
        end
    end

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render :show
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :post_id, :parent_comment_id)
    end


end

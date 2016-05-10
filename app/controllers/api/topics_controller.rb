class Api::TopicsController < ApplicationController
	def index
		@topics = Topic.all.includes(:questions, :users)
		render :index
	end

	def create
		@topic = Topic.new(topic_params)
	end

	def show
		@topic = Topic.includes(:questions).find(params[:id])
	end

	def destroy
		@topic = Topic.find(params[:id])
		@topic.destroy
		render :index ## index will only be for admins to look at.
	end

	def edit
		@topic = Topic.find(params[:id])
	end

	def update
		@topic = Topic.find(params[:id])
		if @topic.update_attributes(topic_params)
			render :show
		else
			render json: @topic.errors.full_messages, status: 422
			render :edit
		end
	end

	private
	def topic_params
		params.require(:topic).permit(:name, :image)
	end
end

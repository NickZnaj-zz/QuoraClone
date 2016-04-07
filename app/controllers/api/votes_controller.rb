class Api::VotesController < ApplicationController

	def index
		if params.has_key?(:answer_id)
			@votes = Vote.where(answer_id: params[:answer_id])
		else
			@votes = Vote.all
		end
		render json: @votes
	end

	def create
		if params[:vote][:value] == "true"
			params[:vote][:value] = true
		else
			params[:vote][:value] = false
		end

		if params[:vote][:user_id].is_a? String
			params[:vote][:user_id] = params[:vote][:user_id].to_i
		end

		if params[:vote][:answer_id].is_a? String
			params[:vote][:answer_id] = params[:vote][:answer_id].to_i
		end


		@vote = Vote.new(vote_params)



		if @vote.save
			render :show
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	def update
		@vote = Vote.find(params[:id])
		if @vote.update(vote_params)
			render :update
		else
			render json: @vote.errors.full_messages, status: 422
		end
	end

	def show
		@vote = Vote.find(params[:id])
	end

	private

	def vote_params
		params.require(:vote).permit(:value, :user_id, :answer_id)
	end
end

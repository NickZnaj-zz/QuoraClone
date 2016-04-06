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
		@vote = Vote.new
		@vote.user_id = current_user.id
		@vote.answer_id = params([:answer_id])
	end

	def update
		@vote = Vote.find(params[:id])
		if @vote.update(vote_params)
			render :update
		else
			render json: @vote.errors.full_messages, status 422
		end
	end

	def show
		@vote = Vote.find(params[:id])
	end

	private

	def vote_params
		params.require(:vote).permit(:answer_id, :value, :user_id)
	end
end

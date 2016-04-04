class Api::SessionsController < ApplicationController

	def show
		if logged_in?
			@current_user = User.includes(:questions, :answers, :topics).find(current_user.id)
			# render json: @current_user
		else
			render json:  0
		end
	end

	def create
		user = User.find_by_credentials(
			params[:email],
			params[:password]
		)

		if user && user.valid_password?(params[:password])
			log_in!(user)
			render json: user
		else
			render json: { message: "Invalid Login Credentials" }, status: 401
		end
	end

	def destroy
		log_out!
		render json: {}
	end
end
